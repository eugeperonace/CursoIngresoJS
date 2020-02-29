function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var respuesta=true;
    var nota;
    var contador;
    var acumulador;


    while (respuesta){
        do{
            nombre = prompt("Ingrese un nombre");
        }while(!isNaN(nombre));

        do{
            edad = prompt("Ingrese una edad");
            edad = parseInt(edad);
        }while(isNaN(edad));

        do{
            sexo = prompt("Ingrese el sexo f o m");
        
        }while(!isNaN(sexo) || sexo != "m" && sexo != "f");
}

}
