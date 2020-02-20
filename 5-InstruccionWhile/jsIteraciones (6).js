function mostrar()
{

	var contador=0;
	var acumulador=0;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

while (contador <5){           //esto se ejecuta 5 veces
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