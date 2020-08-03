// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 

namespace DAL
{
    public interface IDatabaseInitializer
    {
        Task SeedAsync();
    } 
    public class DatabaseInitializer : IDatabaseInitializer
    {
        private readonly ApplicationDbContext _context;
        private UserManager<IdentityUser> _userManager;


        public DatabaseInitializer(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
             _context = context;
            _userManager = userManager;

        }

        public async Task SeedAsync()
        {
            await _context.Database.MigrateAsync().ConfigureAwait(false);

            if (!await _context.Users.AnyAsync())
            { 
                await CreateUserAsync("admin", "test@PASS123");

             } 
        }
         
        private async Task<IdentityUser> CreateUserAsync(string userName, string password)
        {
            IdentityUser applicationUser = new IdentityUser
            {
                UserName = userName
              };
            var result = await _userManager.CreateAsync(applicationUser, password);
             
            if (!result.Succeeded)
                throw new Exception($"Seeding \"{userName}\" user failed. Errors: {string.Join(Environment.NewLine, result.Errors)}");


            return applicationUser;
        }
    }
}
