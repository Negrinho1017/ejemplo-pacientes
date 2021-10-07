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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GenderController : ApiController
    {
        Repository repository;

        public GenderController()
        {
            if (repository == null)
            {
                repository = new Repository();
            }
        }
        // GET api/<controller>
        public List<Gender> Get()
        {
            return repository.GetAllGenders();
        }
    }
}