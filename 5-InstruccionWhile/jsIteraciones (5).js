function mostrar()
{

/* var sexo = prompt("ingrese f ó m .");    //Si pongo el || va a entrar con f con m y con todas las letras/numeros

//while (sexo !="f" || sexo !="m"){
    sexo = prompt("Error, ingrese f o m");
} */ 

var sexo = prompt("ingrese f ó m ."); 
sexo = document.getElementById('Sexo').value


while (sexo !="f" && sexo !="m"){
    sexo = prompt("Error, ingrese f o m");
}


}//FIN DE LA FUNCIÓN