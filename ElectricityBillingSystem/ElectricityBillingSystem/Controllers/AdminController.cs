using ElectricityBillingSystem.Data;
using ElectricityBillingSystem.Entites;
using ElectricityBillingSystem.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        //private readonly ICustomerRepository IcustRepository;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
            //IcustRepository = repo;
        }

        [Route("Login")]
        [HttpPost]
        public IActionResult AdminLogin(AdminLogin login)
        {
            var log = _context.Admins.Where(x => x.AdminUserName.Equals(login.Email) && x.AdminPassword.Equals(login.Password)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User" });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }
        //[HttpGet]
        //[Route("Feedbacks")]
        //public IActionResult GetFeedbacks()
        //{
        //    try
        //    {
        //        List<Feedback> feedbacks = _repo.GetFeedbacks();
        //        return Ok(feedbacks);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Content(ex.Message);
        //    }
        //}

        [Route("Logout")]
        [HttpGet]
        public IActionResult AdminLogout()
        {
            return Ok(new { status = 200, isSuccess = true, message = "User Login successfully" });
        }


    }
}
