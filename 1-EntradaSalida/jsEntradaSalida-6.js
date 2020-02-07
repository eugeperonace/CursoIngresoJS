/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  //Declaracion de variables  
  var numeroUnoIngresado;
  var numeroDosIngresado;
  var numeroUnoParseado;
  var numeroDosParseado;
  var resultado;

  //Obtener los valores por id
  numeroUnoIngresado = document.getElementById("numeroUno").value;
  numeroDosIngresado = document.getElementById("numeroDos").value;

  //Parseo de datos
  numeroUnoParseado= parseInt(numeroUnoIngresado);
  numeroDosParseado= parseInt(numeroDosIngresado);

  //Operacion
  resultado = numeroUnoParseado + numeroDosParseado;

  //Mostrar resultado
  alert("El resultado es " + resultado);
}

