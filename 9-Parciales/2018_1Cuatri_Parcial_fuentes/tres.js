function mostrar()

/*
En el ingreso a un viaje en crucero nos solicitan nombre, edad (mayores de 18), sexo("f" o "m") 
y estado civil ("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven
b) El sexo y nombre del pasajero más viejo
c) La cantidad de mujeres que hay casadas o viudas
d) El promedio de edad entre las mujeres
e) El promedio de edad entre los hombres solteros
*/
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var respuesta = true;
	var edadCasadoMasJoven = 1000;
	var nombreCasadoMasJoven;
	var edadMasViejo = 18;
	var nombreMasViejo;
	var sexoMasViejo;
	var contadorCasadas = 0;
	var contadorViudas = 0;
	var contadorMujeres = 0;
	var acumuladorEdadMujeres = 0;
	var acumuladorEdadHombresSolteros = 0;
	var contadorHombresSolteros = 0;
	var promedioEdadMujeres;
	var promedioEdadHombresSolteros;

	while(respuesta){
	
	do{
		nombre = prompt("INGRESE SU NOMBRE");

	}while (!isNaN(nombre));

	do{
		edad = prompt("INGRESE SU EDAD");
		edad = parseInt(edad);

	}while (isNaN(edad) || edad <=17);

	do{
		sexo = prompt("INGRESE SU SEXO");

	}while (sexo != "f" && sexo != "m");

	do{
		estadoCivil = prompt("INGRESE SU ESTADO CIVIL (soltero, casado, viudo)");

	}while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");


	//a) El nombre del hombre casado mas joven

	if (sexo == "m" && estadoCivil == "casado" && edad < edadCasadoMasJoven){
		nombreCasadoMasJoven = nombre;
		edadCasadoMasJoven = edad;
	}

	//b) El sexo y nombre del pasajero más viejo

	if (edad > edadMasViejo){
		edadMasViejo = edad;
		nombreMasViejo = nombre;
		sexoMasViejo = sexo;
	}

	//c) La cantidad de mujeres que hay casadas o viudas

	if (sexo == "f"){
		
		if (estadoCivil == "casado"){
			contadorCasadas++;

		}else{
		
		}if (estadoCivil == "viudo"){
			contadorViudas++;
		}
	}

	//d) El promedio de edad entre las mujeres

	if (sexo == "f"){
	acumuladorEdadMujeres += edad;
	contadorMujeres++;

	//e) El promedio de edad entre los hombres solteros

	}else{
		if (sexo == "m" && estadoCivil == "soltero"){
			acumuladorEdadHombresSolteros += edad;
			contadorHombresSolteros++;
		}
	}
	
	respuesta = confirm("Desea seguir ingresando datos?");


	} // fin while

	promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;

	promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;


	document.write ("El nombre del hombre casado mas joven es: " +nombreCasadoMasJoven+ "<br>" );
	document.write ("El sexo del pasajero mas viejo es: " +sexoMasViejo+ " y su nombre es: " +nombreMasViejo+ "<br>" );
	document.write ("La cantidad de mujeres casadas es de: " +contadorCasadas+ " y la cantidad de mujeres viudad es de: " +contadorViudas+ "<br>");
	document.write ("El promedio de edad entre las mujeres es de: " +promedioEdadMujeres+ "<br>");
	document.write ("El promedio de edad entre los hombres solteros es de: " +promedioEdadHombresSolteros+ "<br>");




} // fin function 

