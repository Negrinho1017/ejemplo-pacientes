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
                    gender = "Masculino",
                    documentType = "Tarjeta de identidad",
                    documentNumber = "1007291334",
                };
                repository.Create(fernando);
            }
            return repository.GetAllPatients();
        }

        public Patient Get(string documentNumber)
        {
            var Patient = new Patient();
            return repository.GetPatientByDocumentNumber(documentNumber);

        }

        // POST api/<controller>
        public void Post([FromBody] Patient patient)
        {

            repository.Create(patient);

        }
            
        // PUT api/<controller>/5
        public void Put([FromBody] Patient patient)
        {
            repository.Update(patient);
        }

        // DELETE api/<controller>/5
        public void Delete(Patient patient)
        {
            repository.Delete(patient);
        }
    }
}