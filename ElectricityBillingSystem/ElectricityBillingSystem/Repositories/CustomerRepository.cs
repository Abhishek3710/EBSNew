using ElectricityBillingSystem.Data;
using ElectricityBillingSystem.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Repositories
{
    public class CustomerRepository: ICustomerRepository
    {
        private ApplicationDbContext _context = null;

        public CustomerRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        //public List<Customer> GetCustomerDetails()
        //{
        //    return _context.Customers.ToList();
        //}

        //public bool CustomerLogIn(string CustomerUserName, string CustomerPassword)
        //{
        //    int login = (from i in _context.Customers where i.CustomerName == CustomerUserName && i.Password == CustomerPassword select i.CustomerId).Count();
        //    if (login == 1)
        //    {
        //        return true;
        //    }
        //    else
        //    {
        //        return false;
        //    }
        //}

        //public void Update_Customer_Details(Customer customerDetails)
        //{
        //    _context.Customers.Update(customerDetails);
        //    _context.SaveChanges();
        //}

        //public void Forget_Password(Customer customer)
        //{
        //    throw new NotImplementedException();
        //}

        //public void Change_Password(Customer customer)
        //{
        //    throw new NotImplementedException();
        //}

        //public void View_PaymentHistory(Customer customer)
        //{
        //    throw new NotImplementedException();
        //}

        //public bool Edit_profile(Customer NewCustomer)
        //{
        //    if (_context.Customers.Any(i => i.CustomerId == NewCustomer.CustomerId))
        //    {
        //        _context.Customers.Update(NewCustomer);
        //        _context.SaveChanges();
        //        return true;
        //    }
        //    else
        //        return false;
        //}

        //List<Billing> ICustomerRepository.View_BillHistory(string CustomerName)
        //{
        //    return _context.Billings.Where(i => i.CustomerName == CustomerName).ToList();
        //}

        public Customer ValidateCustomer(string emailId, string password)
        {
            try
            {
                var users = _context.Customers.Where(x => x.EmailId == emailId).ToArray();
                if (users.Any(u => u.Password == password))

                    return _context.Customers.SingleOrDefault(u => u.EmailId == emailId && u.Password == password);
                else
                    return null;
                //return db.Users.SingleOrDefault(u => u.EmailId == emailId && u.UserPassword == password);

            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
