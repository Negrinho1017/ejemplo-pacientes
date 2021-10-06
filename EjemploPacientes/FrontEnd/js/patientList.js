var Model = function (){
    var self = this;
    var url = "https://localhost:44374/"
    self.patients = ko.mapping.fromJS([]);
    self.newPatient = ko.mapping.fromJS({
        name: '', city: '', gender: '', documentType: '', documentNumber: ''
    });

    $.ajax({
        url: `${url}api/Main`,
        type: "GET",
        headers: { 'Access-Control-Allow-Origin': '*' },
        datatype: 'application/json',
        success: function (data) {
            ko.mapping.fromJS(data, self.patients);
            console.log(data);
        },
        error: function (msg) {
            window.alert("Error");
        }
    });
    $(document).on('ready', function () {
        $('#btn-enviar').click(function () {
            var patient = ko.toJS(self.newPatient);
            console.log(patient);
            var url = "https://localhost:44374/"
            $.ajax({
                type: "POST",
                url: `${url}api/Main`,
                datatype: 'application/json',
                success: function (data) {
                    ko.mapping.fromJS(data, self.patients);
                    console.log(data);
                }
            });
        });
    });

    self.createPatient = function () {
        var patient = ko.toJS(self.newPatient);
        console.log(patient);
        
    };
}

var vm = new Model;
ko.applyBindings(vm);