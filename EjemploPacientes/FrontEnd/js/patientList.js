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

    //$.ajax({
    //    type: 'PUT',
    //    dataType: 'json',
    //    url: `${url}api/Main`,
    //    data: ko.toJSON(self.Membership()),
    //    contentType: 'application/json; charset=utf-8'
    //}).done(function (data) {
    //    location.hash = '/user';
    //});

    //var url = "https://localhost:44374/"
    //$.ajax({
    //    type: "POST",
    //    url: `${url}api/Main`,
    //    datatype: 'application/json',
    //    data: patient,
    //    success: function () {

    //    }
    //});

}

var vm = new Model;
ko.applyBindings(vm);