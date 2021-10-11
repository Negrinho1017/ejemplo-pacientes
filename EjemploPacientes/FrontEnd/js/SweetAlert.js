$("#btn-enviar").click(function () {
    swal.fire(
        'bien hecho!',
        'paciente creado con éxito!',
        'success'
    )

    location.reload();
});