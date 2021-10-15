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

        //const Document = getParameter('documentNumber');
        //console.log(DocumentNumber);

        $.ajax({
            url: `${url}api/Main`,
            type: "GET",
            headers: { 'Access-Control-Allow-Origin': '*' },
            data: { documentNumber: '1007291334' },
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

var vm = new Model;
vm.init();
    ko.applyBindings(vm);