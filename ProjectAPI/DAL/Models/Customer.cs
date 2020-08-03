using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string FullName { get; set; }
        public int? Age { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Gender { get; set; }  



      
    }
}
