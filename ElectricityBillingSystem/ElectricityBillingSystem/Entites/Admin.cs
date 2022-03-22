using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ElectricityBillingSystem.Entites
{
    [Table("Admin")]
    //[Keyless]
    public class Admin
    {
        [Key]
        [Required]
        public int AdminId { get; set; }
        [Required]
        [MaxLength(50)]
        public string AdminUserName { set; get; }
        [Required]
        [MaxLength(50)]
        public string AdminPassword { set; get; }
    }
}
