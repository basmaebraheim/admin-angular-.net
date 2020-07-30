using DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Customer> Customers { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
    

        }
    }
}
