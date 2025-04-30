$(document).ready(function () {
    $("#btn-ocultar").click(function (e) { 
        e.preventDefault();
        $("#encabezado").hide();
        $(".pares").hide();
    });
    $("#btn-mostrar").click(function (e) { 
        e.preventDefault();
        $("#encabezado").show();
        $(".pares").show();
    });
});