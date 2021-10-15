var Model = function () {
    var self = this;
    var url = "https://localhost:44374/"
    self.patients = ko.mapping.fromJS([]);
    self.genders = ko.mapping.fromJS([]);

    self.init = function () {
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
    }

    self.redirect = function (id) {
        window.location.href = "https://localhost:44332/Patients?documentNumber=" + id;
        console.log(id);
    }

    $(document).on('click', '.editPatient', function () {
        var documentNumber = this.id.replace('edit-', '');
        self.redirect(documentNumber);
        console.log(this.id);
    });

}


var vm = new Model;
vm.init();
ko.applyBindings(vm);