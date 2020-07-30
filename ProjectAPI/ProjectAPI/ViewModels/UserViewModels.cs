using DAL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.ViewModels
{
    public partial class CustomerViewModels
    {
        public class CustomerEditVM
        {
            [MinLength(6, ErrorMessage = "Full Name must be at least 6 characters")]
            public string FullName { get; set; }

            [Required(ErrorMessage = "Age is required")]
            public int Age { get; set; }

            [Required(ErrorMessage = "Birthdate is required")]
            public DateTime Birthdate { get; set; }

            [Required( ErrorMessage = "Gender is required")]
            public Gender Gender { get; set; }
        }
        public class CustomerPatchVM
        {

            public string FullName { get; set; }
            public int Age { get; set; }
            public DateTime Birthdate { get; set; }
            public Gender Gender { get; set; }
        }



    }
}
