using System.ComponentModel.DataAnnotations;

namespace ProjectAPI.ViewModels
{
         public class LoginVM
        {
            [Required(ErrorMessage = "UserName is required")]
            public string Username { get; set; }

            [Required(ErrorMessage = "Password is required")]
            public string Password { get; set; }

            
        }

    public class RegisterVM
    {
        [Required(ErrorMessage = "UserName is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }


    }



}
