function mostrar()
{
    //tomo la edad  
    var edad;
    var estadocivil;

    //Tomo el dato por Id
    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;
	
    //Operacion if      
    if (edad >=18 && estadocivil == "Soltero"){
        alert("Es soltero y no es menor.");
    }

}//FIN DE LA FUNCIÓN