using AgularAPIDbcontext.Models;
using Microsoft.EntityFrameworkCore;

namespace AgularAPIDbcontext.Data
{
    public class AgularAPIDbcontext : DbContext
    {
        public AgularAPIDbcontext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Employee> Employees { get; set; }
    }
}
