function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0;

while (clave.toLowerCase() != "utn750"){
    contador++;
    if (contador == 3){
        break;
    }
   
    clave = prompt("Error! Ingrese el úmero de clave.");
}

if (contador == 3){
    alert("Intentos maximos ingresados");
} else {
    alert("Bienvenido");
}
}//FIN DE LA FUNCIÓN
