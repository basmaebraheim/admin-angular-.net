using DAL.Repositories;
using DAL.Repositories.Interfaces;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;
        ICustomerRepository _customer;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }
        public ICustomerRepository Customers
        {
            get
            {
                if (_customer == null)
                    _customer = new CustomerRepository(_context);

                return _customer;
            }
        }
        public int SaveChanges()
        {
            return _context.SaveChanges();
        }

    }
}
