function mostrar()
{
    //tomo la edad  
    var edad;

    //Ingreso de datos por Id
    edad = document.getElementById("edad").value;

    if (edad <14 || edad > 17){
        alert("No es adolescente");
    }

}//FIN DE LA FUNCIÓN