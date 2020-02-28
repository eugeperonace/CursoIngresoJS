function mostrar()
{
    //tomo la edad  
    var edad;
    var estadocivil;

    //Tomo el dato por Id
    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

    //Operacion If
    if (edad < 18 && estadocivil != "Soltero"){
        alert("Es muy pequeño para NO ser soltero");
    }

}//FIN DE LA FUNCIÓN