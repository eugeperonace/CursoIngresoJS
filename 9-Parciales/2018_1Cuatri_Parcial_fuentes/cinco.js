/*b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)
c
informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva */

function mostrar()
{
    var nombre;
    var cantidadPersonas;
    var cantidadDias;
    var formadepago;
    var respuesta=true;
    var contador;
    var acumulador;

while (respuesta){

    do{
    nombre = prompt("Ingrese un nombre");

    }while(!isNaN(nombre));

    do{
    cantidadPersonas = prompt("Ingrese la cantidad de personas");
    cantidadPersonas = parseInt(cantidadPersonas);
    }while(isNaN(cantidadPersonas) || cantidadPersonas<1);
    
    do{
    cantidadDias = prompt("Ingrese la cantidad de dias de estadia");
    cantidadDias = parseInt(cantidadDias);
    }while(isNaN(cantidadDias));

}

}
