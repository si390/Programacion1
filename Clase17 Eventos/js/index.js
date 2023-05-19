//EVENTOS
console.log("EVENTOS");
//Primero capturar
//let variable = document.querySelector("selector");

//Luego añado addEventoListener
//texto.addEventListener("evento", function(sin nombre){
//Defino acción 
    //Lo que sucede al verificarse el evento
//});


//Definiendo la acción posterior
let texto = document.querySelector("p");
texto.addEventListener('evento', function(){
    alert("Acaba de pasar algo aquí");
});

//Lista de eventos
//click: cuando haces un click
//dblclick: cuando haces doble click
//mouseover: cuando se posiciona el mouse sobre el elemento
//mouseout: cuando el mouse sale del elemento
//mousemove: cuando moves el mouse sobre el elemento
//scroll: cuando scrolleas la pantalla
//keydown:cuandp tecleas 
//load: cuando carga la pantalla
//focus: clickea sobre el campo del formulario
//blur: cuando salís del campo del formulario
//submit: cuando se envía el formulario


//Ejemplos
let boton = document.querySelector("button");
boton.addEventListener('click', function(){
    alert("¡Clickeaste el boton!");
});
boton.addEventListener('mouseover', function(){
    alert("Ahora pasaste el mouse por encima del boton");
});

//Información del evento. Por convención lo llamamos evento "e"
window.addEventListener('keypress', function(e){
    console.log(e);
    console.log(e.key);
});

//Referencia al elemento
let mainTitle = document.querySelector("h1");
mainTitle.addEventListener('mouseover', function(){
    console.log(this);
})

//Evitar acciones por default
let link = document.querySelector("a");
link.addEventListener('click', function(e){
    e.preventDefault()   //Evita el comportamiento default del hipervinculo
    alert("Clickeaste el link"); //Ejecuta la alerta
})
