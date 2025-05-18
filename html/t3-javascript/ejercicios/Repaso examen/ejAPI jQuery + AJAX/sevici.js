$(document).ready(function(){
    let estaciones = [];

    // Función para cargar los datos vía AJAX
    function cargarDatos() {
        $.ajax({
            url: "http://api.citybik.es/sevici.json",
            method: "GET",
            dataType: "json",
            success: function(data){
                estaciones = data.network.stations;
            },
            error: function(){
                $('#result').text("Error al cargar los datos de Sevici.");
            }
        });
    }

    // Cargar datos al iniciar
    cargarDatos();

    // Evento botón número de estaciones
    $('#numStations').click(function(){
        if(estaciones.length === 0) {
            $('#result').text("Cargando datos, espera un momento...");
            return;
        }
        $('#result').text("Número de estaciones disponibles: " + estaciones.length);
    });

    // Evento botón total bicicletas
    $('#totalBikes').click(function(){
        if(estaciones.length === 0) {
            $('#result').text("Cargando datos, espera un momento...");
            return;
        }
        let totalBicis = estaciones.reduce((acum, est) => acum + (est.free_bikes || 0), 0);
        $('#result').text("Total de bicicletas disponibles: " + totalBicis);
    });

    // Evento botón total sitios libres
    $('#totalFree').click(function(){
        if(estaciones.length === 0) {
            $('#result').text("Cargando datos, espera un momento...");
            return;
        }
        let totalLibres = estaciones.reduce((acum, est) => acum + (est.empty_slots || 0), 0);
        $('#result').text("Total de sitios libres: " + totalLibres);
    });
});
