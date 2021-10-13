using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Infrastructure
{
    public class Repository
    {
        private static List<Patient> patients = new List<Patient>();
        private static List<Gender> genders = new List<Gender>();
        private static List<DocumentType> documentTypes = new List<DocumentType>();
        
        public void Create(Patient patient)
        {
            patients.Add(patient);
        }

        public List<Patient> GetAllPatients()
        {
            return patients;
        }

        public List<Gender> GetAllGenders()
        {
            if (genders.Count() == 0)
            {
                var gender1 = new Gender();
                gender1.id = "1";
                gender1.name = "Masculino";
                var gender2 = new Gender();
                gender2.id = "2";
                gender2.name = "Femenino";
                genders.Add(gender1);
                genders.Add(gender2);
            }
            return genders;
        }

        public List<DocumentType> GetAllDocumentTypes()
        {
            if (documentTypes.Count() == 0)
            {
                var documentType1 = new DocumentType();
                documentType1.id = "1";
                documentType1.name = "Tarjeta de identidad";
                var documentType2 = new DocumentType();
                documentType2.id = "2";
                documentType2.name = "Cédula de ciudadanía";
                documentTypes.Add(documentType1);
                documentTypes.Add(documentType2);
            }
            return documentTypes;
        }

    }
}