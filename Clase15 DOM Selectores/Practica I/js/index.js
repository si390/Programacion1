//Ejercicio 1
//a
alert("Bienvenidos a mi sitio");
//b
let confirmacion = confirm("¿Está seguro de querer avanzar?");
let titulo = document.querySelector("h2");
if (confirmacion) {
    titulo.innerText = "¡Qué alegría que quieras continuar tu visita!";
} else{
    titulo.innerText = "Lamentamos que no quieras continuar tu visita";
}

//c
let usuario = prompt("Ingrese su nombre");
console.log(usuario);

//d
let nombre = document.querySelector("h1");
nombre.innerText = "Bienvenido" + " " + usuario;

//e
let edad = prompt("¿Cuántos años tenés?");
console.log(edad);
let div = document.querySelector(".container-general");
let deniedAccess = document.querySelector("#accesoDenegado");
if(edad <= 18 ){
    div.style.display = "none";
}else if(edad <=18){
    deniedAccess.style.display = "visible";
}else{

}