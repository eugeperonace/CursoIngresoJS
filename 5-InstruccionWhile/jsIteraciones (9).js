function mostrar()
{

	var maximo;
	var minimo;
	var respuesta = true;
	var numero;
	var contador = 0;
    //hay que poner una bandera
	var primeraIteracion=true;

	while(respuesta){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
  
	while (isNaN(numero)){              //desmuestro que es un numero
			numero = prompt("Error");
			numero = parseInt(numero);
		}

		//Calculo
	if (primeraIteracion){
		primeraIteracion = false;
		minimo = numero;
		maximo = numero;
	} else {                         //a partir de la 2 iteracion    
		if (numero > maximo){
			maximo = numero;
		}
		if (numero < minimo){
		minimo = numero;
	  }
	}
	respuesta=confirm("¿Desea continuar?");
}

  	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;



}//FIN DE LA FUNCIÓN