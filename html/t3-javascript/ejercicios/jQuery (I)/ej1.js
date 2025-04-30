$(document).ready(function () {
    $("#btn-ocultar").click(function (e) { 
        e.preventDefault();
        $("h1").hide();
        $("p").hide();
    });
    $("#btn-mostrar").click(function (e) { 
        e.preventDefault();
        $("h1").show();
        $("p").show();
    });
});