//numeros.html
var lista = []

//Añadir números
function anadir()
{
    var numero = parseFloat(document.getElementById("num").value);
    //Comprobar número
    if (isNaN(numero))
    {
        alert("Por favor introduzca valores numéricos");
        return;
    }
    //Añadir valores a la lista
    lista.push(numero);
    //Titulo indicando que número se ha añadido a la lista
    document.getElementById("ultimo").innerHTML = "Último nº añadido: " +numero;
}

//Sumar números de la lista
function suma()
{
    var total = 0;
    //Bucle que automatice la suma
    for (var i=0; i < lista.length; i++)
    {
        total = total + lista[i]
    }
    //Título indicando la suma
    document.getElementById("total").innerHTML = "La suma total de la lista es: " +total;
}

//Encontrar máximo en la lista
function mayor()
{
    //Título indicando el máximo
    document.getElementById("maximo").innerHTML = "El número más alto es: " +maximo(lista);

    function maximo(numero)
    {
        return Math.max.apply(null, numero);
    }
}

//Título menor en la lista
function menor()
{
    //Título indicando el mínimo
    document.getElementById("menor").innerHTML = "El número más pequeño es: " +min(lista);
    function min(numero)
    {
        return Math.min.apply(null, numero);
    }
}

function completo()
{
    var orden = lista.sort( );
    document.getElementById("lista").innerHTML = "Su lista de número es " +orden;
}