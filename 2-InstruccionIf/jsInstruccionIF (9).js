function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	//Operacion
	max = 11;
	min = 1;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min;

	console.log(numeroRandom);
	alert(numeroRandom);

}//FIN DE LA FUNCIÓN
