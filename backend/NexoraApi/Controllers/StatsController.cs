using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NexoraApi.Data;
using NexoraApi.Models;

namespace NexoraApi.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class StatsController : ControllerBase
{
    private readonly AppDbContext _context;

    public StatsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("overview")]
    public async Task<IActionResult> GetOverview()
    {
        var now = DateTime.UtcNow;
        var startOfToday = new DateTime(now.Year, now.Month, now.Day, 0, 0, 0, DateTimeKind.Utc);
        var startOfThisWeek = startOfToday.AddDays(-(int)now.DayOfWeek);
        var startOfThisMonth = new DateTime(now.Year, now.Month, 1, 0, 0, 0, DateTimeKind.Utc);

        var totalLeads = await _context.Leads.CountAsync();
        var todayLeads = await _context.Leads.CountAsync(l => l.CreatedAt >= startOfToday);
        var thisWeekLeads = await _context.Leads.CountAsync(l => l.CreatedAt >= startOfThisWeek);
        var thisMonthLeads = await _context.Leads.CountAsync(l => l.CreatedAt >= startOfThisMonth);

        var byStatus = await _context.Leads
            .GroupBy(l => l.Status)
            .Select(g => new { Status = g.Key.ToString(), Count = g.Count() })
            .ToListAsync();

        var byService = await _context.Leads
            .GroupBy(l => l.Service)
            .Select(g => new { Service = g.Key, Count = g.Count() })
            .OrderByDescending(x => x.Count)
            .Take(5)
            .ToListAsync();

        var closedWon = byStatus.FirstOrDefault(x => x.Status == LeadStatus.ClosedWon.ToString())?.Count ?? 0;
        var winRate = totalLeads > 0 ? Math.Round((double)closedWon / totalLeads * 100, 1) : 0;

        return Ok(new
        {
            TotalLeads = totalLeads,
            TodayLeads = todayLeads,
            ThisWeekLeads = thisWeekLeads,
            ThisMonthLeads = thisMonthLeads,
            WinRate = winRate,
            ByStatus = byStatus,
            ByService = byService
        });
    }
}
