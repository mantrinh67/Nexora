using System.ComponentModel.DataAnnotations;
using NexoraApi.Models;

namespace NexoraApi.DTOs;

public class CreateLeadDto
{
    [Required(ErrorMessage = "Vui lòng nhập họ và tên")]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Vui lòng nhập số điện thoại hoặc Zalo")]
    [MaxLength(30)]
    public string Phone { get; set; } = string.Empty;

    [EmailAddress(ErrorMessage = "Email không hợp lệ")]
    [MaxLength(100)]
    public string? Email { get; set; }

    [MaxLength(100)]
    public string Service { get; set; } = "Website Doanh Nghiệp";

    [MaxLength(100)]
    public string Budget { get; set; } = "10.000.000đ - 25.000.000đ";

    public string? Message { get; set; }

    [MaxLength(50)]
    public string? Source { get; set; } = "Nexora Landing Page";
}

public class UpdateLeadStatusDto
{
    [Required]
    public LeadStatus Status { get; set; }

    public string? Notes { get; set; }
}

public class LeadResponseDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string? Email { get; set; }
    public string Service { get; set; } = string.Empty;
    public string Budget { get; set; } = string.Empty;
    public string? Message { get; set; }
    public string Status { get; set; } = string.Empty;
    public string Source { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
