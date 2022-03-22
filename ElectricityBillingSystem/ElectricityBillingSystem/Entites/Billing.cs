using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Entites
{
    public class Billing
    {
        [Key]
        [Required]
        public int BillId { set; get; }

        public Connection Connection { get; set; }

        [ForeignKey("Connection")]
        [Required]
        public int ConnectionId { set; get; }
        
        [Required]
        public int Units { set; get; }

        [Required]
        [MaxLength(200)]
        public string Bill_For_Month { set; get; }

        [Required]
        public double Amount { set; get; }

        [Required]
        public DateTime Due_Date { set; get; }

        [Required]
        public string Status { set; get; }
    }
}
