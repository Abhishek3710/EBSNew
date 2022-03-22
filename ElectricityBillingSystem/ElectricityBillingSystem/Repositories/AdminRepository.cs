using ElectricityBillingSystem.Data;
using ElectricityBillingSystem.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private ApplicationDbContext _context = null;

        public AdminRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool AdminLogin(string AdminUserName, string AdminPassword)
        {
            Admin login = _context.Admins.SingleOrDefault(i => i.AdminUserName == AdminUserName && i.AdminPassword == AdminPassword);
            if (login != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
