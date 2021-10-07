var Model = function (){
    var self = this;
    var url = "https://localhost:44374/"
    self.patients = ko.mapping.fromJS([]);
    self.genders = ko.mapping.fromJS([]);

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

var vm = new Model;
ko.applyBindings(vm);