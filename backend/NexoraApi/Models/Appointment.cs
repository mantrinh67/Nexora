using System.ComponentModel.DataAnnotations;

namespace NexoraApi.Models;

public enum AppointmentStatus
{
    Pending,
    Confirmed,
    Cancelled,
    Completed
}

public class Appointment
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid? LeadId { get; set; }
    public Lead? Lead { get; set; }

    [Required]
    public DateTime ScheduledAt { get; set; }

    public int DurationMinutes { get; set; } = 30;

    public AppointmentStatus Status { get; set; } = AppointmentStatus.Pending;

    [MaxLength(500)]
    public string? Notes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
