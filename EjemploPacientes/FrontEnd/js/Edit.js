function redirect(){
    window.location.href = "https://localhost:44332/Patients?documentNumber=43855737";
}

function getParameter(parameterName){
    let parameters = new URLSearchParams(window.location.href);
    return parameters.get(parameterName);
}
