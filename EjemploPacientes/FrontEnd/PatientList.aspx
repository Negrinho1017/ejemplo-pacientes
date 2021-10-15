<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="PatientList.aspx.cs" Inherits="FrontEnd.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Lista de pacientes</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo de documento</th>
                <th>Documento</th>
                <th>Género</th>
                <th>Ciudad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody data-bind="foreach: patients">
            <tr>
                <td data-bind="text: name"></td>
                <td data-bind="text: documentType"></td>
                <td data-bind="text: documentNumber"></td>
                <td data-bind="text: gender"></td>
                <td data-bind="text: city"></td>
                <td>
                    <button type="button" class="btn btn-info" id="edit"  onclick="redirect();">
                        <span class="glyphicon glyphicon-edit"></span>
                    </button>
                    <button type="button" class="btn btn-danger">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                </td>
            </tr>

        </tbody>
    </table>
    <script type="text/javascript" src="js/patientList.js"></script>
    <script type="text/javascript" src="js/Edit.js"></script>

</asp:Content>
