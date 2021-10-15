function redirect() {
    window.location.href = "https://localhost:44332/Patients?documentNumber=1234" ;
}

function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.href);
    return parameters.get(parameterName);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}