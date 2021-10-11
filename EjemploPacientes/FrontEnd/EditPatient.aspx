<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="EditPatient.aspx.cs" Inherits="FrontEnd.WebForm1" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Editar paciente</h2>
    <formview method="POST" id="patients">
        <div class="mb-3">
            <label for="name" class="form-label">Nombre completo</label>
            <input type="text" class="form-control" id="name" aria-describedby="namePat">
        </div>
        <div class="mb-3">
            <label for="city" class="form-label">Ciudad</label>
            <input type="text" class="form-control" name="city" id="city" >
        </div>
        <div class="mb-3 ">
            <label for="gender" class="form-label">Género</label>
            <select data-bind="options: genders, value: newPatient.gender, optionsText: 'name', optionsValue: 'name', optionsCaption: 'Seleccione...'" class="form-control" name="gender" id="gender" ></select>
        </div>
        <div class="mb-3 ">
            <label for="tipoDoc" class="form-label">Tipo de documento</label>
            <select data-bind="options: documentTypes, value: newPatient.documentType, optionsText: 'name', optionsValue: 'name', optionsCaption: 'Seleccione...'" class="form-control" name="tipoDoc" id="tipoDoc"></select>
        </div>
        <div class="mb-3">
            <label for="document" class="form-label">Documento</label>
            <input type="number" class="form-control" name="document" id="document" aria-describedby="docPat">
        </div>
        <input type="button" class="btn btn-primary" id="btn-enviar" value="Enviar" data-bind='click: $root.createPatient' onclick="location.reload()"/>
    </formview>
    <!--<script type="text/javascript" src="js/Patients.js"></script>-->
</asp:Content>
