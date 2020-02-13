function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;

    if (edad >17){
        alert("Es mayor de edad");

    } else {
        // de 17 a -infinito
        if (edad > 13){
            alert("Es adolescente");

        } else {
            alert("Es menor de edad");        
        }
    }

}//FIN DE LA FUNCION