console.log("Hola");

//Funciones
function saludar() {
    return "Hola Tito";
}
//Uso de la función y ejecución
console.log(saludar());


function saludar(nombre) {
    return "Hola " + nombre;
}
console.log(saludar("Juan"));
console.log(saludar("Maria"));

let nombre = ["Mateo", "Nicolas", "Sebastian"]
console.log(saludar(nombre[2]));

//scope
let numero1 = 90;
function sumar() {
    return numero1;
}

//Playground
//1
function rectangulo(base,altura) {
    return base * altura;
}
console.log(rectangulo(100,50));

//2
function triangulo(base,altura) {
    return (base * altura)/2;
}
console.log(triangulo(60,40));

//3
function largodelArray(arraycualquiera) {
    return arraycualquiera.length;
}
let numeros = [1,2,3,4,5];
console.log(largodelArray(numeros));

//5
function dolarhoy(pesos) {
    return pesos/400;
}
console.log(dolarhoy(1000));
