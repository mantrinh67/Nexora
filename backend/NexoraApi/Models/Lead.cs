using System.ComponentModel.DataAnnotations;

namespace NexoraApi.Models;

public enum LeadStatus
{
    New,
    Contacting,
    Quoted,
    ClosedWon,
    ClosedLost
}

public class Lead
{
    public Guid Id { get; set; } = Guid.NewGuid();
    
    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(30)]
    public string Phone { get; set; } = string.Empty;

    [MaxLength(100)]
    public string? Email { get; set; }

    [MaxLength(100)]
    public string Service { get; set; } = string.Empty;

    [MaxLength(100)]
    public string Budget { get; set; } = string.Empty;

    public string? Message { get; set; }

    public LeadStatus Status { get; set; } = LeadStatus.New;

    [MaxLength(50)]
    public string Source { get; set; } = "Landing Page";

    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}
