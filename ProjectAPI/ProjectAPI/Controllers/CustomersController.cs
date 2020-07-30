using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;
using AutoMapper;
using DAL.Models;
 using Microsoft.AspNetCore.Authorization;

namespace ProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {

        private IUnitOfWork _unitOfWork; 


        public CustomersController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork; 
        }
        // GET: api/Customers
        [HttpGet]
        [Authorize]

        public IActionResult Get()
        {
            var users = _unitOfWork.Customers.GetAll();
            return Ok(users); 
        }


        // GET api/Customers/5
        [HttpGet("{id}")]

        public ActionResult<Customer> Get(int id)
        {
            var customer = _unitOfWork.Customers.Get(id);
            if (customer == null)
            {
                return NotFound("User does not exist");
            }
            return Ok(customer);
        }

        // POST api/Customers
        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            try
            {
                _unitOfWork.Customers.Add(customer);
                _unitOfWork.SaveChanges();

            }
            catch
            { 
                return NotFound();

            }
            
            return Ok("Success");

        }

        // PUT api/Customers/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Customer customer)
        {

            if (id != customer.Id)
            {
                return BadRequest();
            }
            try
            {
                _unitOfWork.Customers.Update(customer);
                _unitOfWork.SaveChanges();
            }
            catch 
            { 
                    return NotFound();
                 
            }
            return NoContent();
        }

        // DELETE api/Customers/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var customer = _unitOfWork.Customers.Get(id);
            if (customer == null)
            {
                return NotFound("User does not exist");
            }
            try
            {
                _unitOfWork.Customers.Remove(customer);
                _unitOfWork.SaveChanges();
            }
            catch
            { 
                return NotFound();

            }
            return Ok("Success");

        }
    }
}
