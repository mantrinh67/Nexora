using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NexoraApi.Data;
using NexoraApi.Models;
using NexoraApi.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. Database (PostgreSQL EF Core)
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? "Host=localhost;Port=5432;Database=nexora;Username=postgres;Password=123456";

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

// 2. Application Services
builder.Services.AddHttpClient();
builder.Services.AddScoped<IJwtService, JwtService>();

// 3. JWT Authentication
var jwtSecret = builder.Configuration["Jwt:Key"] ?? "NexoraSuperSecretEnterpriseKey2026!MustBeVeryLongAndSecure!";
var jwtIssuer = builder.Configuration["Jwt:Issuer"] ?? "NexoraApi";
var jwtAudience = builder.Configuration["Jwt:Audience"] ?? "NexoraClient";

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtIssuer,
        ValidAudience = jwtAudience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddAuthorization();

// 4. CORS: Allow Landing Page (Vite dev 5173, Next.js dev 3000, Vercel prod)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",
                "http://localhost:3000",
                "https://*.vercel.app")
              .SetIsOriginAllowedToAllowWildcardSubdomains()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// 5. Swagger with Bearer Token Auth support
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Nexora Enterprise API",
        Version = "v1",
        Description = "Backend API cho Nexora: Tiếp nhận khách hàng, Quản lý Leads, Thống kê & Tích hợp n8n"
    });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Nhập token JWT theo định dạng: Bearer {your token}",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// 6. Auto-migrate DB and Seed Default Admin Account on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {
        logger.LogInformation("Đang kiểm tra và khởi tạo Database...");
        db.Database.EnsureCreated();

        // Seed default Admin if not present
        if (!db.Users.Any())
        {
            db.Users.Add(new AppUser
            {
                Email = "admin@nexora.studio",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("Nexora@2026"),
                FullName = "Nexora Admin",
                Role = "Admin",
                CreatedAt = DateTime.UtcNow
            });
            db.SaveChanges();
            logger.LogInformation("Đã khởi tạo tài khoản Admin mặc định: admin@nexora.studio / Nexora@2026");
        }
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Lỗi khi kết nối hoặc khởi tạo Database");
    }
}

// 7. Middlewares
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Nexora API v1");
    c.RoutePrefix = "swagger";
});

app.UseCors("AllowFrontend");

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/", () => Results.Redirect("/swagger"));

app.MapControllers();

app.Run();
