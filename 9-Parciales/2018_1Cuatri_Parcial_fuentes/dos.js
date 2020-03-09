function mostrar()

/*Realizar un algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al 
por mayor, hasta que el cliente quiera:
peso (entre 10 y 1000) en kilo,
precio por kilo (mas de cero),
tipo validad ("v","a","m")(vegetal, animal, mezcla)

Si compro mas de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro mas de 300 en total tenes 25% de descuento sobre el total a pagar.

a) el importe total a pagar, bruto sin descuento
b) el importe total a pagar con descuento (si corresponde)
c) informar el tipo de alimento mas caro
d) el promedi de precio por kilo en total

*/

{
    var peso;
    var precio;
    var tipo;
    var respuesta = true;
    var primeraVez = true;
    var acumPeso = 0;
    var acumPrecioParcial = 0;
    var precioTotal;
    var precioConDescuento;
    var precioAlimentoMasCaro;
    var tipoAlimentoMasCaro;
    var acumPrecioDeCadaUno = 0;
    var contadorPrecios = 0;
    var descuento = 0;

    while(respuesta){
    
    do{
        peso = prompt("INGRESE PESO");
        peso = parseInt(peso);

    }while (isNaN(peso) || peso <=9 || peso >1000);
    
    do{
        precio = prompt("INGRESE PRECIO");
        precio = parseInt(precio);

    }while (isNaN(precio) || precio <=0);

    do{
        tipo = prompt("INGRESE TIPO v, a, m ");

	}while (!isNaN(tipo) || tipo != "v" && tipo != "a" && tipo != "m");


    //a) el importe total a pagar, bruto sin descuento

    acumPeso += peso;
    acumPrecioParcial += precio;
    precioTotal = acumPrecioParcial * acumPeso;

    respuesta = confirm("Desea seguir ingresando datos?");

    //b) el importe total a pagar con descuento (si corresponde)

    if ( peso >= 300){
     precioConDescuento = 85*precioTotal /100;

	}else{
        if ( peso > 100 && peso <=299){
        precioConDescuento = 75*precioTotal /100; 
		}
	}

    // c) informar el tipo de alimento mas caro

    if (primeraVez || precio > precioAlimentoMasCaro){
        primeraVez = false;
        precioAlimentoMasCaro = precio;
        tipoAlimentoMasCaro = tipo;
	}

    // d) el promedio de precio por kilo en total

    acumPrecioDeCadaUno += precio;
    contadorPrecios++;

    

	} // fin while
  
  promedioPrecio = acumPrecioDeCadaUno / contadorPrecios;

  document.write ("El importe total a pagar sin descuento es: " +precioTotal+ "<br>");
  document.write ("El importe total a pagar con descuento es de: " +precioConDescuento+ "<br>");
  document.write ("El tipo de alimento mas caro es: " +tipoAlimentoMasCaro+ "<br>");
  document.write ("El promediod e precio por kilo en todal es de: " +promedioPrecio+ "<br>");


} // fin function
