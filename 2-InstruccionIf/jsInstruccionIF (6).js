function mostrar()
{
    //tomo la edad  
    var edad;

    //Ingreso de datos por Id
    edad = document.getElementById("edad").value;

    //Operacion IF

    if (edad >17){
        alert("Es mayor de edad");

        }else{
            if (edad > 13){
            alert("Es adolescente");
            }else{
                alert("Es menor de edad");        
        }
    }

}//FIN DE LA FUNCION