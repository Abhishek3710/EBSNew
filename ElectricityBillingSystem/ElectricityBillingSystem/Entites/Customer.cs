using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Entites
{
    public class Customer
    {
        [Key]
        [Required]
        public int CustomerId { get; set; }
        [MaxLength(50)]
        [Required]
        public string CustomerName { get; set; }
        [MaxLength(10)]
        [Required]
        public string ContactNumber { get; set; }
        [MaxLength(50)]
        public string EmailId { get; set; }
        [MaxLength(50)]
        [Required]
        public string Password { get; set; }
        [MaxLength(100)]
        [Required]
        public string Address { get; set; }
        [MaxLength(20)]
        [Required]
        public string City { get; set; }
        [MaxLength(20)]
        [Required]
        public string State { get; set; }
    }
}
