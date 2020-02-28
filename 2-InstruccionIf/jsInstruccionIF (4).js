function mostrar()
{
    //tomo la edad  
    var edad;

    //Ingreso de datos por Id
    edad = document.getElementById("edad").value;

    //Operacion IF
    if (edad >= 13 && edad < 18) {
            alert("Es adolescente");
    }

}//FIN DE LA FUNCIÓN