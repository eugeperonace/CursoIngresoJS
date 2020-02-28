/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //Declaro variables
	var dividendo;
    var divisor;
    var dividendoParseado;
    var divisorParseado;
    var resultado;

    //Obtengo los valores por ID
    dividendo = document.getElementById("numeroDividendo").value;
    divisor = document.getElementById("numeroDivisor").value;

    //Parseo de datos
    parseInt(divisor);
    parseInt(dividendo);

    //Operacion
    resultado = dividendo / divisor

    alert("El resto es " + resultado);

}
