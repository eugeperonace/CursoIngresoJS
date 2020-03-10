/*Debemos realizar la carga de 5(cinco) productos de prevención

de contagio, de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo", "jabón" o "alcohol"), el precio

(validar entre 100 y 300), la cantidad de unidades

(no puede ser 0 o negativo y no debe superar las 1000 unidades),

la marca y el fabricante. Se debe informar al usuario lo siguiente:

a) del más caro de los barbijos, la cantidad de unidades y el fabricante

b) del ítem con más unidades, el fabricante

c) cuántas unidades de jabones hay en total.

*/

function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contador = 0;
	var precioBarbijoCaro = 0;
	var cantidadBarbijosCaros;
	var fabricanteBarbijosCaros;
	var cantidadMaxUnidades = 0;
	var acumuladorCantJabones = 0;

	while(contador <5){

	do{
		tipo = prompt("INGRESE EL TIPO (barbijo, jabon, alcohol)");

	}while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

	do{
		precio = prompt("INGRESE EL PRECIO");
		precio = parseInt(precio);

	}while (isNaN(precio) || precio <=99 || precio >300);

	do{
		cantidad = prompt("INGRESE LA CANTIDAD");
		cantidad = parseInt(cantidad);

	}while (isNaN(cantidad) || cantidad <=0 || cantidad >1000);

	do{
		marca = prompt("INGRESE LA MARCA");

	}while (!isNaN(marca));

	do{
		fabricante = prompt("INGRESE EL FABRICANTE");

	}while (!isNaN(fabricante));

	// a) del más caro de los barbijos, la cantidad de unidades y el fabricante

	if (tipo == "barbijo" && precio > precioBarbijoCaro){
	
		precioBarbijoCaro = precio;

		cantidadBarbijosCaros = cantidad;

		fabricanteBarbijosCaros = fabricante;
	}

	//b) del ítem con más unidades, el fabricante

	if (cantidad > cantidadMaxUnidades){
		cantidadMaxUnidades = cantidad;
		fabricanteDeMasUnidades = fabricante;
	}

    //c) cuántas unidades de jabones hay en total.

	if (tipo == "jabon"){

		acumuladorCantJabones += cantidad;
	}


	contador++;

	} // fin while

	contador = confirm("DESEA SEGUIR INGRESANDO DATOS?");

	document.write ("El barbijo mas caro fue del fabricante: " +fabricanteBarbijosCaros+ " y se ingresaron " +cantidadBarbijosCaros+ " unidades. <br>");
	document.write ("El item con mas unidades fue del fabricante: " +fabricanteDeMasUnidades+ "<br>");
	document.write ("En total hay: " +acumuladorCantJabones+ " unidades de jabones. <br>");




} // fin function
