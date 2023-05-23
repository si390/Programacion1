//ALERTAS
//Código usando alert
let mensaje = "Hola Mundo";
alert(mensaje);
//Muestra en el navegador un pop up de alerta con el mensaje enviado

//Código usando promp
let message = "¿Cuál es tu nombre?";
let resultado = prompt(message);
//Retorna un string con la información que el usuario escribió en el campo

//Código usando confirm
let msj = "¿Es usted mayor de edad?";
let result = confirm(msj);
//Confirm retorna un booleano (true o false)


//OPERADORES
//Igualdad simple
10 == "10"; //Igualdad True
10 == 15; //Igualdad False

//Igualdad estricta
10 === "10"; //Igualdad estricta False
10 === 10; //Igualdad estricta True

//Desigualdad simple
10 != "10"; //Desigualdad False
10 != 15; //Desigualdad True

//Desigualdad estricta
10 !== "10"; //Desigualdad estricta True
10 !== 10; //Desigualdad estricta False

//AND && Las condiciones de cada término deben cumplirse simultáneamente
(10 > 15) && (10 != 20); //false
(12 > 4) && (12 != 24); //true

//OR || al menos una de las condiciones de los términos se cumple
(10 > 15) || (10 != 20); //true
(12 > 4) ||(12 === 24); //true

//NOT ! Niega el resultado de una condicion
!false; //true
!(10 > 15); //true


//CONDICIONALES
//Bloque IF
//  if (condicion a evaluar) {
//      codigo a ejecutar si la condicion es verdadera
//  } else if (otra condicion a evaluar) {
//      codigo a ejecutar si la condicion anterior es falsa
//  } else {
//      codigo a ejecutar si todas las condiciones anteriores son falsas
//  }

