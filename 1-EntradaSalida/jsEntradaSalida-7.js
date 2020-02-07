/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	// creo variables
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;

    // Saco los datos desde el formulario y los coloco en la variable correspondiente
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    // Transformo los valores en numeros enteros
    numeroUnoParseado= parseInt(numeroUnoIngresado);
    numeroDosParseado= parseInt(numeroDosIngresado);

    // Realizo la operacion
    resultado = numeroUnoParseado + numeroDosParseado; 

    // Muestro el resultado por pantalla
    alert("La suma es " + resultado);
}

function restar()
{   var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    numeroUnoParseado= parseInt(numeroUnoIngresado);
    numeroDosParseado= parseInt(numeroDosIngresado);

    resultado = numeroUnoParseado - numeroDosParseado

    alert("La resta es " + resultado)
	
}

function multiplicar()
{   var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoParseado;
    var numeroDosParseado;
    var resultado;

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    numeroUnoParseado= parseInt(numeroUnoIngresado);
    numeroDosParseado= parseInt(numeroDosIngresado);

    resultado = numeroUnoParseado * numeroDosParseado

    alert("La multiplicacion es " + resultado)

	
}

function dividir()
{
	
}

