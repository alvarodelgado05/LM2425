document.getElementById('formularioRegistro').addEventListener('submit', function (e) {
    e.preventDefault();

// Declarar las variables con las cuales vamos a trabajar en el documento

let nombre = document.getElementById('nombre').value;
let apellidos = document.getElementById('apellidos').value;
let telefono = document.getElementById('telefono').value;
let email = document.getElementById('email').value;
let contrasena1 = document.getElementById('contrasena1').value;
let contrasena2 = document.getElementById('contrasena2').value;
let terminos = document.getElementById('aceptarTerminos').checked;

limpiarErrores();

let valido = true;

// Validacion del formulario importante

if (nombre === '') {
        mostrarError('error-nombre', 'El nombre no puede estar vacío');
        valido = false;
 }

if (apellidos === '') {
     mostrarError('error-apellidos', 'Los apellidos no pueden estar vacíos');
     valido = false;
}

if (telefono.length < 9 || telefono.length > 15 || !/^\d+$/.test(telefono)) {
    mostrarError('error-telefono', 'Introduce un teléfono válido (entre 9 y 15 dígitos).');
    valido = false;
 }

if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
     mostrarError('error-email', 'Introduce un correo electrónico válido.');
    valido = false;
}

if (contrasena1.length < 8) {
    mostrarError('error-contrasena1', 'La contraseña debe tener al menos 8 caracteres.');
    valido = false;
}

if (contrasena1 !== contrasena2) {
    mostrarError('error-contrasena2', 'Las contraseñas no coinciden.');
    valido = false;
}

if (!terminos) {
    mostrarError('error-terminos', 'Debes aceptar los términos de uso.');
    valido = false;
}

if (valido) {
 alert('Formulario enviado con éxito');
}

});

// Función para mostrar errores

function mostrarError(id, mensaje) {
    let elemento = document.getElementById(id);
    elemento.textContent = mensaje;
    elemento.classList.add('activo');
}


// Función para limpiar los errores previos

function limpiarErrores() {
    let errores = document.querySelectorAll('.error');
    errores.forEach(e1 => {
        e1.textContent = '';
        e1.classList.remove('activo');
    });
}
