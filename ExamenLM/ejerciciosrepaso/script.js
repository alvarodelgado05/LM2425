$(document).ready(function () {
    let $nombrecaja = $("#nombre");
    let $mensaje = $("#mensajeBienvenida");


let nombreGuardado = localStorage.getItem("nombreUsuario");
if (nombreGuardado) {
        mostrarMensaje(nombreGuardado);
        $nombrecaja.val(nombreGuardado);
    }

    $("#formularioNombre").on("submit", function (e) {
        e.preventDefault();
        let nombre = $nombrecaja.val().trim();

        if (!nombre) {
            alert("Por favor, introduce tu nombre");
        }

        localStorage.setItem("nombreUsuario", nombre);
        mostrarMensaje(nombre);
        $nombrecaja.val("");
    });


    function mostrarMensaje(nombre) {
        $mensaje
            .text(`¡Hola, ${nombre}! Bienvenido de nuevo.`)
            .removeClass("oculto")
            .css({
                backgroundColor: "#d4edda",
                color: "#155724",
                borderLeft: "5px solid #28a745",
                padding: "15px",
                opacity: 0
            })
            .animate({ opacity: 1 }, 600);
    }
});
