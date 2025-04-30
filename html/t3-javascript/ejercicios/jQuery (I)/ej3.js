$(document).ready(function () {
    $("#btn-aumentar").click(function (e) { 
        e.preventDefault();
        $("#encabezado").css({"font-size":"200%", "background-color":"green"});
        $(".pares").css({"font-size":"200%", "background-color":"green"})
    });
    $("#btn-disminuir").click(function (e) { 
        e.preventDefault();
        $("#encabezado").css({"font-size":"50%", "background-color":"yellow"});
        $(".pares").css({"font-size":"50%", "background-color":"yellow"})
    });
});