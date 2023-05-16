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
    deniedAccess.style.display = "block";
}else{

}

//f
let div2 = document.querySelector(".background-img");
let progGustar = confirm("¿Te gusta la programación?");
if (progGustar){
    div2.style.backgroundImage = "url(./img/programmer.jpeg)";
}else{
    div2.style.backgroundImage = "url(./img/gatito.jpeg)";
}

//i
let pelifav = prompt("¿Cuál es tu película favorita?");
let directfav = prompt("¿Cuál es tu director favorito?");
let movieduration = prompt("¿Cuánto dura tu película favorita?");
let actorfav = prompt("¿Cuál es tu actor favorito?");

//h
let pelicula = {
    nombre: pelifav,
    director: directfav,
    duración: movieduration,
    actor: actorfav,

}
console.log(pelicula.nombre);
console.log(pelicula.director);
console.log(pelicula.duración);
console.log(pelicula.actor);

let div3 = document.querySelector("#pelicula");
div3.style.display = "block";

//j

let ul1 = document.querySelector("#nombre");
let ul2 = document.querySelector("#director");
let ul3 = document.querySelector("duracion");
let ul4 = document.querySelector("#actor");


ul1.innerText = pelicula.nombre;
ul2.innerText = pelicula.director;
ul3.innerText = pelicula.duración;
ul4.innerText = pelicula.actor;
