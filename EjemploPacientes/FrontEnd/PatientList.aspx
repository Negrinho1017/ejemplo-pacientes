<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="PatientList.aspx.cs" Inherits="FrontEnd.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Lista de pacientes</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Documento</th>
            </tr>
        </thead>
        <tbody data-bind="foreach: patients">
            <tr>
                <td data-bind="text: name"></td>
                <td data-bind="text: documentNumber"></td>
            </tr>
        </tbody>
    </table>
    <script type="text/javascript" src="js/patientList.js"></script>
</asp:Content>
