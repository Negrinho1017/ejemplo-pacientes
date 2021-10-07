<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Patients.aspx.cs" Inherits="FrontEnd.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Creación de pacientes.</h2>
    <formview method="POST" id="patients">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre completo</label>
            <input type="text" class="form-control" id="name" aria-describedby="namePat" data-bind='value: newPatient.name'>
        </div>
        <div class="mb-3">
            <label for="city" class="form-label">Ciudad</label>
            <input type="text" class="form-control" name="city" id="city" data-bind='value: newPatient.city'>
        </div>
        <div class="mb-3 ">
            <label for="gender" class="form-label">Género</label>
            <select data-bind="options: genders, value: selectGender, optionsText: 'name', optionsValue: 'id', optionsCaption: 'Seleccione...'" class="form-control" name="gender" id="gender" ></select>
        </div>
        <div class="mb-3 ">
            <label for="tipoDoc" class="form-label">Tipo de documento</label>
            <select data-bind="options: documentTypes, value: selectDoc, optionsText: 'name', optionsValue: 'id', optionsCaption: 'Seleccione...'" class="form-control" name="tipoDoc" id="tipoDoc"></select>
        </div>
        <div class="mb-3">
            <label for="document" class="form-label">Documento</label>
            <input type="number" class="form-control" name="document" id="document" aria-describedby="docPat" data-bind='value: newPatient.documentNumber'>
        </div>
        <input type="button" class="btn btn-primary" id="btn-enviar" value="Enviar" data-bind='click: $root.createPatient' />
    </formview>
    <script type="text/javascript" src="js/Patients.js"></script>
</asp:Content>

