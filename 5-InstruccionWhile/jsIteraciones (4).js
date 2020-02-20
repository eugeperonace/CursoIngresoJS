function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	

	while (numero <0 || numero >9 || isNaN(numero)){
		numero = prompt("Error, Ingrese un numero valido");

		numero = parseInt(numero); 
	}

document.getElementByID("Numero").value = numero;

}//FIN DE LA FUNCIÓN