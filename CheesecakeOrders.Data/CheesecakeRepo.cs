using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrders.Data
{
    public class CheesecakeRepo
    {
        private string _connectionString;

        public CheesecakeRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCheesecake(CheesecakeDetails cheesecake)
        {
            using var context = new cheesecakeDataContext(_connectionString);
            context.CheesecakeOrders.Add(cheesecake);
            context.SaveChanges();
        }

        public List<CheesecakeDetails> GetAllCheesecakes()
        {
            using var context = new cheesecakeDataContext(_connectionString);
            return context.CheesecakeOrders.ToList();
        }

        public CheesecakeDetails GetById(int Id)
        {
            using var context = new cheesecakeDataContext(_connectionString);
            return context.CheesecakeOrders.FirstOrDefault(c => c.Id == Id);
        }
    }
}
