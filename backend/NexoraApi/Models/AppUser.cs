using System.ComponentModel.DataAnnotations;

namespace NexoraApi.Models;

public class AppUser
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [EmailAddress]
    [MaxLength(150)]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string PasswordHash { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string FullName { get; set; } = string.Empty;

    [MaxLength(30)]
    public string Role { get; set; } = "Admin"; // Admin, Staff

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
