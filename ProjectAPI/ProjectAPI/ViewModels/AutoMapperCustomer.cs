using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL.Models;
using static ProjectAPI.ViewModels.CustomerViewModels;
 
namespace ProjectAPI.ViewModels
{
    public class AutoMapperCustomer : Profile
    {
        public AutoMapperCustomer()
        {  

            CreateMap<Customer, CustomerEditVM>();
            CreateMap<CustomerEditVM, Customer>();

            CreateMap<Customer, CustomerPatchVM>();

          
        }
    }
}
