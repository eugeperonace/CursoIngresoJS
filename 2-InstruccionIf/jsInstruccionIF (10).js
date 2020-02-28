function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	max = 11;
	min = 1;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min;

	if (numeroRandom >8 && numeroRandom <11){
		alert(numeroRandom + " EXCELENTE");            //Dejar un espacio adelante del " string"
	}else{   
		if (numeroRandom >4){
		alert(numeroRandom + " APROBÓ");
		}else{ 
		alert(numeroRandom + " Vamos, la próxima se puede"); 
	}	
}

}//FIN DE LA FUNCIÓN