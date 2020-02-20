function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
var iterador =          // me va a decir cuantas veces se va a iterar

iterador = prompt("Cuántos numeros desea ingresar");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

while (contador <){           //esto se ejecuta 5 veces
	contador++;
	var numero = prompt("Ingrese un numero");

	//validar
	numero = parseInt(numero);

	while(isNaN(numero)){      //si numero es NaN lo que voy a pedir un numero valido 
		numero = prompt("Ingrese un numero valido");
		numero = parseInt(numero);
		}

         acumulador += numero;   //acumulamos


}

}//FIN DE LA FUNCIÓN