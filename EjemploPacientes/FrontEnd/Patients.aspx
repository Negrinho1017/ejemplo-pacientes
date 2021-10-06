<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Patients.aspx.cs" Inherits="FrontEnd.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Creación de pacientes.</h2>
        <formview method="POST" id="patients">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre completo</label>
            <input type="text" class="form-control" id="name" aria-describedby="namePat" data-bind='value: newPatient.name'>
        </div>
        <div class="mb-3">
            <label for="ciudad" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="ciudad">
        </div>
        <div class="mb-3 ">
            <label for="genero" class="form-label">Género</label>
            <select class="form-control" aria-label="genero" id="genero">

                <option selected>Seleccione...</option>
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
                <option value="3">Otro</option>
            </select>
        </div>
                <div class="mb-3 ">
            <label for="tipoDoc" class="form-label">Tipo de documento</label>
            <select class="form-control" aria-label="genero" id="tipoDoc">

                <option selected>Seleccione...</option>
                <option value="1">Tarjeta de identidad</option>
                <option value="2">Cédula de ciudadanía</option>
                <option value="3">Cédula de extranjería</option>
            </select>
        </div>
                <div class="mb-3">
            <label for="documento" class="form-label">Documento</label>
            <input type="number" class="form-control" id="documento" aria-describedby="namePat">
        </div>
        <input type="button" class="btn btn-primary" id="btn-enviar" value="Enviar" data-bind='click: $root.createPatient'/>
        <!--<button type="submit" class="btn btn-primary">Enviar</button>-->
    </formview>
    <script type="text/javascript" src="js/patientList.js"></script>
</asp:Content>

