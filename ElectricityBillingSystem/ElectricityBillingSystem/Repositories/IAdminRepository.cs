using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Repositories
{
    public interface IAdminRepository
    {
        bool AdminLogin(string AdminUserName, string AdminPassword);
    }

}
