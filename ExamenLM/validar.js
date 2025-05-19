document.getElementById('formulario').addEventListener('submit', function(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('contraseña').value;
    let confirmar = document.getElementById('confirmar').value;
    let terminos = document.getElementById('terminos').checked;
    let mensaje = document.getElementById('mensaje');

    let errores = "";

    if (nombre.length < 3) {
        errores += "El nombre debe tener al menos 3 caracteres.\n";
    }

    let validaremail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!validaremail) {
        errores += "El correo no es válido.\n";
    }

    if (password.length < 6) {
        errores += "La contraseña debe tener al menos 6 caracteres.\n";
    }

    if (password !== confirmar) {
        errores += "Las contraseñas no coinciden.\n";
    }

    if (!terminos) {
        errores += "Debes aceptar los términos.\n";
    }

    if (errores !== "") {
        mensaje.style.color = "red";
        mensaje.textContent = errores;
    } else {
        // Guardar en localStorage
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("email", email);

        // Limpiar formulario
        document.getElementById('formulario').reset();

        // Mostrar mensaje de éxito
        mensaje.style.color = "green";
        mensaje.textContent = "Formulario enviado correctamente.";
    }
});
