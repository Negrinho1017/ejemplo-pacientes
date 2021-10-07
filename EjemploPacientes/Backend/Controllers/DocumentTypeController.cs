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
    public class DocumentTypeController : ApiController
    {
        Repository repository;

        public DocumentTypeController()
        {
            if (repository == null)
            {
                repository = new Repository();
            }
        }
        // GET api/<controller>
        public List<DocumentType> Get()
        {
            return repository.GetAllDocumentTypes();
        }

    }
}