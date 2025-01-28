var lista = [];

function anadir()
{
    var numero = parseInt(document.getElementById('num').value);

    if (isNaN(numero) || numero<0)
    {
        alert("Por favor introduzca un número válido (entero y positivo)");
        return;
    }
    lista.push(numero);
    document.getElementById('final').innerHTML = "El nº " + numero + " ha sido añadido";
}

function ordenar()
{
    var orden = lista.sort();
    document.getElementById("final").innerHTML = "Su lista de número es " + orden;
}

function media ()
{
    var suma = 0;
    var total = lista.length;
    for (var i = 0; i < total; i++)
    {
        suma = suma + lista[i];
    }
    var media = suma/total;
    document.getElementById("media").innerHTML = "La media es de " + media;
}