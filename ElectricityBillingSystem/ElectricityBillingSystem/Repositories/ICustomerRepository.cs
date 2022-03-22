using ElectricityBillingSystem.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Repositories
{
    public interface ICustomerRepository
    {
        //List<Customer> GetCustomerDetails();
        ////bool AddCustomerDetails(Customer customerDetails);
        //bool CustomerLogIn(string CustomerUserName, string CustomerPassword);
        //// void DeleteCustomerDetails(string CustomerUserName, string CustomerPassword);
        //void Update_Customer_Details(Customer customerDetails);

        //void Forget_Password(Customer customer);

        //void Change_Password(Customer customer);
        ////Task<IEnumerable<Customer>> Get();
        //void View_PaymentHistory(Customer customer);
        ////public List<Billing> View_BillHistory(string CustomerName);
        //bool Edit_profile(Customer customer);

        Customer ValidateCustomer(string emailId, string password);
    }
}
