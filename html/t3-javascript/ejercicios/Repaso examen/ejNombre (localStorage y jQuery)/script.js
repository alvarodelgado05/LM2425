$(document).ready(function () {
    function mostrarMensaje(nombre) {
        const mensaje = $('#mensajeBienvenida');

        mensaje
            .text(`¡Hola, ${nombre}! Bienvenido de nuevo.`)
            .css({
                'background-color': '#d1e7dd',
                'color': '#0f5132',
                'border': '1px solid #badbcc',
                'font-weight': 'bold',
                'font-size': '18px',
                'padding': '10px',
                'border-radius': '5px'
            })
            .removeClass('oculto') // quitar clase que impide ver el mensaje
            .hide()
            .slideDown(600); // animación dinámica
    }

    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
        mostrarMensaje(nombreGuardado);
    }

    $('#formularioNombre').on('submit', function (e) {
        e.preventDefault();
        const nombre = $('#nombre').val().trim();

        if (nombre) {
            localStorage.setItem('nombreUsuario', nombre);
            mostrarMensaje(nombre);
        }
    });
});