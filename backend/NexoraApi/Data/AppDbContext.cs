using Microsoft.EntityFrameworkCore;
using NexoraApi.Models;

namespace NexoraApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Lead> Leads => Set<Lead>();
    public DbSet<AppUser> Users => Set<AppUser>();
    public DbSet<Appointment> Appointments => Set<Appointment>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Lead>(entity =>
        {
            entity.HasIndex(e => e.CreatedAt);
            entity.HasIndex(e => e.Phone);
            entity.HasIndex(e => e.Status);
            entity.Property(e => e.Status)
                  .HasConversion<string>();
        });

        modelBuilder.Entity<AppUser>(entity =>
        {
            entity.HasIndex(e => e.Email).IsUnique();
        });

        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.HasIndex(e => e.ScheduledAt);
            entity.Property(e => e.Status)
                  .HasConversion<string>();
            entity.HasOne(e => e.Lead)
                  .WithMany()
                  .HasForeignKey(e => e.LeadId)
                  .OnDelete(DeleteBehavior.SetNull);
        });
    }
}
