using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ProjectAPI.ViewModels;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;


namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private IConfiguration _config;
        private UserManager<IdentityUser> _userManager;
        public AuthController(IConfiguration config, UserManager<IdentityUser> userManager)
        {
            _config = config;
            _userManager = userManager;
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterVM userDetails)
        {
            if (!ModelState.IsValid || userDetails == null) { 
                return new BadRequestObjectResult(new { Message = "User Registration Failed" }); 
            }
            var identityUser = new IdentityUser() { UserName = userDetails.Username, Email = userDetails.Email }; 
            var result = await _userManager.CreateAsync(identityUser, userDetails.Password);

            if (!result.Succeeded)
            {
                var dictionary = new ModelStateDictionary(); 
                foreach (IdentityError error in result.Errors) { 
                    dictionary.AddModelError(error.Code, error.Description);
                }
                return new BadRequestObjectResult(new { Message = "User Registration Failed", Errors = dictionary });
            }

            return Ok(new { Message = "User Reigstration Successful" });
        }



        [AllowAnonymous]
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginVM userInfo)
        {
            IdentityUser identityUser;

            if (!ModelState.IsValid || userInfo == null || (identityUser = await ValidateUser(userInfo)) == null)
            {
                return Unauthorized();

            } 
            var token = GenerateJSONWebToken(userInfo); 
            return Ok(new { Token = token, Message = "Success" });
        }

        private async Task<IdentityUser> ValidateUser(LoginVM userInfo)
        {
            var identityUser = await _userManager.FindByNameAsync(userInfo.Username); 
            if (identityUser != null) { 
                var result = _userManager.PasswordHasher
                    .VerifyHashedPassword(identityUser, identityUser.PasswordHash, userInfo.Password);
                return result == PasswordVerificationResult.Failed ? null : identityUser;
            }
            return null;
        }

        private string GenerateJSONWebToken(LoginVM userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
