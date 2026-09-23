using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NexoraApi.Data;
using NexoraApi.DTOs;
using NexoraApi.Models;

namespace NexoraApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LeadsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _config;
    private readonly ILogger<LeadsController> _logger;

    public LeadsController(
        AppDbContext context,
        IHttpClientFactory httpClientFactory,
        IConfiguration config,
        ILogger<LeadsController> logger)
    {
        _context = context;
        _httpClientFactory = httpClientFactory;
        _config = config;
        _logger = logger;
    }

    /// <summary>
    /// Public endpoint for customer form submission from Landing Page
    /// </summary>
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> CreateLead([FromBody] CreateLeadDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var lead = new Lead
        {
            Name = dto.Name.Trim(),
            Phone = dto.Phone.Trim(),
            Email = dto.Email?.Trim(),
            Service = string.IsNullOrWhiteSpace(dto.Service) ? "Website Doanh Nghiệp" : dto.Service.Trim(),
            Budget = string.IsNullOrWhiteSpace(dto.Budget) ? "10.000.000đ - 25.000.000đ" : dto.Budget.Trim(),
            Message = dto.Message?.Trim(),
            Source = string.IsNullOrWhiteSpace(dto.Source) ? "Nexora Landing Page" : dto.Source.Trim(),
            Status = LeadStatus.New,
            CreatedAt = DateTime.UtcNow
        };

        _context.Leads.Add(lead);
        await _context.SaveChangesAsync();

        // Optional background trigger to n8n webhook
        _ = TriggerN8nWebhookAsync(lead);

        return CreatedAtAction(nameof(GetLeadById), new { id = lead.Id }, new LeadResponseDto
        {
            Id = lead.Id,
            Name = lead.Name,
            Phone = lead.Phone,
            Email = lead.Email,
            Service = lead.Service,
            Budget = lead.Budget,
            Message = lead.Message,
            Status = lead.Status.ToString(),
            Source = lead.Source,
            Notes = lead.Notes,
            CreatedAt = lead.CreatedAt,
            UpdatedAt = lead.UpdatedAt
        });
    }

    /// <summary>
    /// Admin endpoint: list leads with filters, search, and pagination
    /// </summary>
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetLeads(
        [FromQuery] string? search,
        [FromQuery] LeadStatus? status,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        if (page < 1) page = 1;
        if (pageSize < 1 || pageSize > 100) pageSize = 20;

        var query = _context.Leads.AsNoTracking().AsQueryable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            var searchLower = search.Trim().ToLower();
            query = query.Where(l =>
                l.Name.ToLower().Contains(searchLower) ||
                l.Phone.Contains(searchLower) ||
                (l.Email != null && l.Email.ToLower().Contains(searchLower)) ||
                l.Service.ToLower().Contains(searchLower));
        }

        if (status.HasValue)
        {
            query = query.Where(l => l.Status == status.Value);
        }

        var total = await query.CountAsync();
        var items = await query
            .OrderByDescending(l => l.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(l => new LeadResponseDto
            {
                Id = l.Id,
                Name = l.Name,
                Phone = l.Phone,
                Email = l.Email,
                Service = l.Service,
                Budget = l.Budget,
                Message = l.Message,
                Status = l.Status.ToString(),
                Source = l.Source,
                Notes = l.Notes,
                CreatedAt = l.CreatedAt,
                UpdatedAt = l.UpdatedAt
            })
            .ToListAsync();

        return Ok(new
        {
            Total = total,
            Page = page,
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling((double)total / pageSize),
            Data = items
        });
    }

    /// <summary>
    /// Admin endpoint: get details of a lead
    /// </summary>
    [HttpGet("{id:guid}")]
    [Authorize]
    public async Task<IActionResult> GetLeadById(Guid id)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null) return NotFound(new { message = "Không tìm thấy khách hàng yêu cầu" });

        return Ok(new LeadResponseDto
        {
            Id = lead.Id,
            Name = lead.Name,
            Phone = lead.Phone,
            Email = lead.Email,
            Service = lead.Service,
            Budget = lead.Budget,
            Message = lead.Message,
            Status = lead.Status.ToString(),
            Source = lead.Source,
            Notes = lead.Notes,
            CreatedAt = lead.CreatedAt,
            UpdatedAt = lead.UpdatedAt
        });
    }

    /// <summary>
    /// Admin endpoint: update lead status & internal notes
    /// </summary>
    [HttpPatch("{id:guid}/status")]
    [Authorize]
    public async Task<IActionResult> UpdateStatus(Guid id, [FromBody] UpdateLeadStatusDto dto)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null) return NotFound(new { message = "Không tìm thấy khách hàng yêu cầu" });

        lead.Status = dto.Status;
        if (dto.Notes != null)
        {
            lead.Notes = dto.Notes;
        }
        lead.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(new { message = "Cập nhật trạng thái thành công", status = lead.Status.ToString() });
    }

    /// <summary>
    /// Admin endpoint: delete a lead
    /// </summary>
    [HttpDelete("{id:guid}")]
    [Authorize]
    public async Task<IActionResult> DeleteLead(Guid id)
    {
        var lead = await _context.Leads.FindAsync(id);
        if (lead == null) return NotFound(new { message = "Không tìm thấy khách hàng yêu cầu" });

        _context.Leads.Remove(lead);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Đã xóa thông tin lead thành công" });
    }

    private async Task TriggerN8nWebhookAsync(Lead lead)
    {
        var webhookUrl = _config["N8n:WebhookUrl"];
        if (string.IsNullOrWhiteSpace(webhookUrl)) return;

        try
        {
            var client = _httpClientFactory.CreateClient();
            var payload = new
            {
                leadId = lead.Id,
                name = lead.Name,
                phone = lead.Phone,
                email = lead.Email,
                service = lead.Service,
                budget = lead.Budget,
                message = lead.Message,
                source = lead.Source,
                submittedAt = lead.CreatedAt
            };

            await client.PostAsJsonAsync(webhookUrl, payload);
            _logger.LogInformation("Successfully dispatched lead {LeadId} to n8n webhook", lead.Id);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "Failed to dispatch lead {LeadId} to n8n webhook", lead.Id);
        }
    }
}
