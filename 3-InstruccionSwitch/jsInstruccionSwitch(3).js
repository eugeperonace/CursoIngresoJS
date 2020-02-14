function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
   case "Enero":
       alert("Este mes tiene 30 o más días");
        break;
   case "Febrero":
       alert("Este mes no tiene más de 29 días");
        break;
   case "Marzo":
        alert("Este mes tiene 30 o más días");
        break;

   case "Diciembre":
        alert("Este mes tiene 30 o más días");

}//FIN DE LA FUNCIÓN