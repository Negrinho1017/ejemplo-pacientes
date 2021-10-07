using Backend.Infrastructure;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Backend.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class MainController : ApiController
    {
        Repository repository;
        
        public MainController()
        {
            if (repository == null)
            {
                repository = new Repository();
            }
        }
        public List<Patient> Get()
        {
            if (repository.GetAllPatients().Count() == 0)
            {
                Patient fernando = new Patient()
                {
                    name = "Fernando Rodríguez",
                    city = "Medellín",
                    gender = "1",
                    documentType = "1",
                    documentNumber = "1007291334",
                };
                repository.Create(fernando);
            }
            return repository.GetAllPatients();
        }


        // POST api/<controller>
        public void Post([FromBody] Patient patient)
        {
            repository.Create(patient);
        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}