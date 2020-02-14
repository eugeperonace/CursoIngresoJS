function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	max = 11;
	min = 1;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min

	if (numeroRandom >8 && numeroRandom <11){
		alert("EXCELENTE");
	}
	if (numeroRandom >4){
		alert("APROBÓ");
	} else{ 
		alert("Vamos, la próxima se puede");
	}


}//FIN DE LA FUNCIÓN