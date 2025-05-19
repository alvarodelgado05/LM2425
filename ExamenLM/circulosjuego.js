$(document).ready(function() {
    // Inicializamos la puntuación del jugador a 0
    let puntuacion = 0;

    // Obtenemos la mejor puntuación almacenada en el navegador, o 0 si no existe
    let mejorPuntuacion = localStorage.getItem("mejorPuntuacion") || 0;

    // Mostramos la mejor puntuación en pantalla
    $("#mejor").text(mejorPuntuacion);

    // Variable para controlar el intervalo de aparición de los círculos
    let intervaloJuego;

    // Tiempo límite del juego: 30 segundos (en milisegundos)
    let tiempoLimite = 30 * 1000;

    // Función que crea un círculo en una posición aleatoria dentro del área de juego
    function crearCirculo() {
        // Creamos un nuevo elemento <div> con la clase "circulo"
        let $circulo = $('<div class="circulo"></div>');

        // Calculamos una posición aleatoria dentro del contenedor #juego
        let x = Math.random() * ($("#juego").width() - 50);
        let y = Math.random() * ($("#juego").height() - 50);

        // Asignamos la posición calculada al círculo
        $circulo.css({ top: y, left: x });

        // Añadimos el círculo al contenedor del juego
        $("#juego").append($circulo);

        // Hacemos que el círculo desaparezca tras 2 segundos si no se pulsa
        setTimeout(() => {
            $circulo.fadeOut(300, () => $circulo.remove());
        }, 2000);

        // Evento: cuando se hace clic sobre un círculo
        $circulo.click(function() {
            // Aumentamos la puntuación
            puntuacion++;

            // Actualizamos el texto de la puntuación en pantalla
            $("#puntuacion").text(puntuacion);

            // Eliminamos el círculo que fue pulsado
            $(this).remove();

            // Si la puntuación actual supera la mejor puntuación registrada...
            if (puntuacion > mejorPuntuacion) {
                // ... actualizamos la mejor puntuación
                mejorPuntuacion = puntuacion;

                // La guardamos en el almacenamiento local
                localStorage.setItem("mejorPuntuacion", mejorPuntuacion);

                // Y la mostramos en pantalla
                $("#mejor").text(mejorPuntuacion);
            }
        });
    }

    // Función para iniciar el juego
    function iniciarJuego() {
        // Cada segundo (1000 ms) se crea un nuevo círculo
        intervaloJuego = setInterval(crearCirculo, 1000);

        // Después del tiempo límite se detiene el juego
        setTimeout(() => {
            // Paramos la aparición de nuevos círculos
            clearInterval(intervaloJuego);

            // Eliminamos los círculos que queden en pantalla
            $(".circulo").remove();

            // Mostramos un mensaje con la puntuación final
            alert(`¡Tiempo terminado!\nTu puntuación fue: ${puntuacion}`);
        }, tiempoLimite);
    }

    // Iniciamos el juego automáticamente al cargar la página
    iniciarJuego();
});
 