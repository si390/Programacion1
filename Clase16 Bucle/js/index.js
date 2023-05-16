//BUCLE FOR
//Los bucles permiten repetir un bloque de código, uno de ellos es for

//Estructura
//for (inicio; condición o corte; modificador){
    //codigo que se ejecutará en cada repetición
//}

for (let i = 0; i <5; i++) {
    console.log("Dando la vuelta al mundo " + i);
};

//inicio: un valor inicial para el contador
//condición: si es verdadera ejecuta el código, si es falsa detiene el ciclo
//modificador: incremento o decremento


//Bucle FOR recorriendo un array
let comidasFavoritas = ["Milanesa", "Asado", "Papas fritas"];
//Hacemos console.log tradicional
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
//Ahora lo hacemos con for
for (let i = 0; i <3; i++){
    console.log(comidasFavoritas[i]);
};
//Usamos la propiedad length, va a pasar por todos los elementos del array, no nos tenemos que preocupar cuántos son
let hobbies = ["Polo", "Painting", "Skydiving", "Natación", "Fútbol", "Dancing", "Singing", "Playing", "Studying"];
for (let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i])
}
