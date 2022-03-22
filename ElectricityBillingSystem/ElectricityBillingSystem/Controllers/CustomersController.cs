using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricityBillingSystem.Data;
using ElectricityBillingSystem.Entites;
using Microsoft.AspNetCore.Cors;
using ElectricityBillingSystem.Repositories;

namespace ElectricityBillingSystem.Controllers
{
    [EnableCors("CorsApi")]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ICustomerRepository IcustRepository;

        public CustomersController(ApplicationDbContext context,ICustomerRepository repo)
        {
            _context = context;
            IcustRepository = repo;
        }



        //[HttpPost]
        //[Route("Login/{emailId}/{password}")]
        //public IActionResult Login(string emailId, string password)
        //{
        //    Customer user = IcustRepository.ValidateCustomer(emailId,password);
        //    if (user != null)
        //    {
        //        string token = GetToken(user);
        //        model = new UserLogin() { UserName = user.EmailId, Token = token, Role = user.UserRole };
        //    }
        //    else
        //    {
        //        model = new UserLogin() { UserName = "", Token = "", Role = "Invalid Role" };
        //    }

        //    return Ok(model);
        //}

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        [HttpGet]
        [Route("GetCustomers/{customername}")]
        public IActionResult GetCustomers(string customername)
        {
            try
            {
                List<Customer> customers = _context.Customers.Where(i => i.CustomerName == customername).ToList();
                return Ok(customers);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }

        [Route("Login")]
        [HttpPost]
        public IActionResult CustomerLogin(CustomerLogin login)
        {
            var log = _context.Customers.Where(x => x.EmailId.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();
            
            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User" });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log});
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Customers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomer", new { id = customer.CustomerId }, customer);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return customer;
        }

        private bool CustomerExists(int id)
        {
            return _context.Customers.Any(e => e.CustomerId == id);
        }
    }
}
