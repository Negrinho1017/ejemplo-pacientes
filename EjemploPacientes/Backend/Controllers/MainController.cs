﻿using Backend.Models;
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
        List<Patient> patients = new List<Patient>();
        Patient fernando = new Patient()
        {
            name = "Fernando Rodríguez",
            documentNumber = "254833995",
            birthdate = new DateTime(),
            documentType = "1",
            email = "fernando@gmail.com",
            phoneNumber = "3006009000"
        };
        public MainController()
        {
            
        }
        public IEnumerable<Patient> Get()
        {
            if (patients.Count() == 0)
            {
                patients.Add(fernando);
            }
            return patients;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
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