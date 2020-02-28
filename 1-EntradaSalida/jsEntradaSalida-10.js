/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var importeParseado;
    var resultado;

    //Obtengo los valores por ID
    importe = document.getElementById("importe").value;
    
    //Parseo de datos
    importeParseado = parseInt(importe);

    //Operacion
    resultado = importeParseado *25/100;

    document.getElementById("resultado").value= resultado;
}
