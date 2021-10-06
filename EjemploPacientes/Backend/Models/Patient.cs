using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class Patient
    {
        public string name { get; set; }
        public string city { get; set; }
        public string gender { get; set; }
        public string documentType { get; set; }
        public string documentNumber { get; set; }

    }
}