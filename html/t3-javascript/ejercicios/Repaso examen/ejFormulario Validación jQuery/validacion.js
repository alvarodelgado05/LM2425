document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');

    // Funciones de validación para cada campo
    function validarNombre(nombre) {
        return nombre.trim().length >= 2;
    }

    function validarApellidos(apellidos) {
        return apellidos.trim().length >= 2;
    }

    function validarTelefono(telefono) {
        // Validar que tenga solo números y entre 7 y 15 dígitos (puede adaptarse)
        const regex = /^[0-9]{7,15}$/;
        return regex.test(telefono.trim());
    }

    function validarEmail(email) {
        // Validación básica de email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.trim());
    }

    function validarContrasena(contrasena) {
        // Al menos 6 caracteres, una mayúscula, una minúscula y un número
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return regex.test(contrasena);
    }

    function validarContrasenaRepetida(c1, c2) {
        return c1 === c2;
    }

    function validarTerminos(checked) {
        return checked === true;
    }

    // Mostrar u ocultar error
    function mostrarError(idError, mensaje) {
        const errorElem = document.getElementById(idError);
        errorElem.textContent = mensaje;
        errorElem.classList.add('activo');
    }

    function ocultarError(idError) {
        const errorElem = document.getElementById(idError);
        errorElem.textContent = '';
        errorElem.classList.remove('activo');
    }

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const email = formulario.email.value;
        const contrasena1 = formulario.contrasena1.value;
        const contrasena2 = formulario.contrasena2.value;
        const terminos = formulario.aceptarTerminos.checked;

        let formularioValido = true;

        // Validar Nombre
        if (!validarNombre(nombre)) {
            mostrarError('error-nombre', 'El nombre debe tener al menos 2 caracteres.');
            formularioValido = false;
        } else {
            ocultarError('error-nombre');
        }

        // Validar Apellidos
        if (!validarApellidos(apellidos)) {
            mostrarError('error-apellidos', 'Los apellidos deben tener al menos 2 caracteres.');
            formularioValido = false;
        } else {
            ocultarError('error-apellidos');
        }

        // Validar Teléfono
        if (!validarTelefono(telefono)) {
            mostrarError('error-telefono', 'El teléfono debe contener entre 7 y 15 dígitos numéricos.');
            formularioValido = false;
        } else {
            ocultarError('error-telefono');
        }

        // Validar Email
        if (!validarEmail(email)) {
            mostrarError('error-email', 'Introduce un correo electrónico válido.');
            formularioValido = false;
        } else {
            ocultarError('error-email');
        }

        // Validar Contraseña
        if (!validarContrasena(contrasena1)) {
            mostrarError('error-contrasena1', 'La contraseña debe tener al menos 6 caracteres, incluyendo mayúscula, minúscula y número.');
            formularioValido = false;
        } else {
            ocultarError('error-contrasena1');
        }

        // Validar Contraseña repetida
        if (!validarContrasenaRepetida(contrasena1, contrasena2)) {
            mostrarError('error-contrasena2', 'Las contraseñas no coinciden.');
            formularioValido = false;
        } else {
            ocultarError('error-contrasena2');
        }

        // Validar aceptación de términos
        if (!validarTerminos(terminos)) {
            mostrarError('error-terminos', 'Debes aceptar los términos de uso.');
            formularioValido = false;
        } else {
            ocultarError('error-terminos');
        }

        // Si todo es válido, mostrar un alert y resetear formulario (o hacer lo que sea)
        if (formularioValido) {
            alert('¡Registrado con éxito en Conexión+!');
            formulario.reset();
            // Opcional: puedes redirigir o hacer otras acciones aquí
        }
    });
});