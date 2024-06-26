using CheesecakeOrders.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeOrders.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesecakeController : ControllerBase
    {
        private string _connectionString;

        public CheesecakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public void Add(CheesecakeDetails cheesecake)
        {
            var repo = new CheesecakeRepo(_connectionString);
            repo.AddCheesecake(cheesecake);
        }

        [HttpGet]
        [Route("getall")]
        public List<CheesecakeDetails> GetAll()
        {
            var repo = new CheesecakeRepo(_connectionString);
            return repo.GetAllCheesecakes();
        }

        [HttpGet]
        [Route("getone")]
        public CheesecakeDetails GetOne(int id)
        {
            var repo = new CheesecakeRepo(_connectionString);
            return repo.GetById(id);
        }
    }
}
