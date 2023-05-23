console.log("Web Storage");
//LOCAL storage
console.log("Local Storage: Guarda información sin expiración");

//sessionStorage
console.log("Session Storage: Se borra al cerrar la ventana");

//JSON.stringfy()
//método stringfy toma un objeto literal y lo transforma en una cadena de texto

//JSON.parse()
//.parse() analiza una cadena de texto y lo transforma en un objeto literal


//PLAYGROUND
//1
let miNombre = "Sebastian";
localStorage.setItem('userName', miNombre);
console.log(localStorage);

let recuperoStorage = localStorage.getItem('userName');
console.log(recuperoStorage);

//2
