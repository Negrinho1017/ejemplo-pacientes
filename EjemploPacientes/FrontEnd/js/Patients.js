var Model = function () {
    var self = this;
    var url = "https://localhost:44374/"
    self.patients = ko.mapping.fromJS([]);
    self.newPatient = ko.mapping.fromJS({
        name: '', city: '', gender: '', documentType: '', documentNumber: ''
    });
    self.selectGender = ko.observable("");
    self.genders = ko.mapping.fromJS([]);

    self.selectDoc = ko.observable("");
    self.documentTypes = ko.mapping.fromJS([]);

    self.init = function () {
        $.ajax({
            url: `${url}api/Gender`,
            type: "GET",
            headers: { 'Access-Control-Allow-Origin': '*' },
            datatype: 'application/json',
            success: function (data) {
                ko.mapping.fromJS(data, self.genders);
                console.log(data);
            },
            error: function (msg) {
                window.alert("Error");
            }
        });

        $.ajax({
            url: `${url}api/DocumentType`,
            type: "GET",
            headers: { 'Access-Control-Allow-Origin': '*' },
            datatype: 'application/json',
            success: function (data) {
                ko.mapping.fromJS(data, self.documentTypes);
                console.log(data);
            },
            error: function (msg) {
                window.alert("Error");
            }
        });

        const Document = getParameter('documentNumber');
        console.log(Document);

        $.ajax({
            url: `${url}api/Main`,
            type: "GET",
            headers: { 'Access-Control-Allow-Origin': '*' },
            data: { documentNumber: Document },
            datatype: 'application/json',
            success: function (data) {
                ko.mapping.fromJS(data, self.newPatient);
                console.log(data);
            },
            error: function (msg) {
                window.alert("Error");
            }
        });
    }

    self.createPatient = function () {
        console.log(self.selectDoc());
        console.log(self.newPatient);
        var patient = ko.toJS(self.newPatient);
        console.log(patient);

        var url = "https://localhost:44374/"
        var documentNumber = getParameterByName('documentNumber');
        console.log(documentNumber);
        if (documentNumber === undefined || documentNumber === null || documentNumber === '') {

            $.ajax({
                type: "POST",
                url: `${url}api/Main`,
                datatype: 'application/json',
                data: patient,
                success: function () {

                }
            });

        } else {
            $.ajax({
                type: "PUT",
                url: `${url}api/Main`,
                datatype: 'application/json',
                data: patient,
                success: function () {

                }
            });
        }
    }
}
function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    console.log(parameters);
    return parameters.get(parameterName);
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var vm = new Model;
vm.init();
    ko.applyBindings(vm);