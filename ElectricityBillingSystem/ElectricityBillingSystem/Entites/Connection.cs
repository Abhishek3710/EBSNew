using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Entites
{
    public class Connection
    {
        [Key]
        public int ConnectionId { get; set; }

        [StringLength(255)]
        [Required]
        public string ConnectionNumber { get; set; }

        public Customer Customer { get; set; }

        [ForeignKey("Customer")]
        [Required]
        public int CustomerId { set; get; }

        [Required]
        [MaxLength(200)]
        public string ConnectionType { get; set; }

        [Required]
        public DateTime ConnectionStartDate { get; set; }

        [Required]
        public float Load { get; set; }

        public IList<Billing> billings { get; set; }
    }
}
