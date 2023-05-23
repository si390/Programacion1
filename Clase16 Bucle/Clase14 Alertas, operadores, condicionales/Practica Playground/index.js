//Precalentando
//1
let respuesta = confirm("¿Vas a salir de tu casa?");

if (respuesta) {
    alert("Chequeá el tiempo antes de salir");
} else{
    alert("Qué bueno que te quedes. Va a llover mucho hoy");
}

//2
let nombre = prompt("Ingresá tu nombre");
let edad = prompt("Ingresá tu edad");
console.log(nombre);
console.log(edad);

let fanDeportes = confirm("¿Te gustan los deportes?");
console.log(fanDeportes);

alert("Muchas gracias" + nombre);

let usuario = {
    nombre: nombre,
    edad: edad,
    deportistaProfesional: function(){
        if (fanDeportes) {
            return "Sí, soy fan";
    }else{
        return "No tan fan";
    }
}}

let answer = usuario.deportistaProfesional();

console.log(answer);