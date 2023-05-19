//Playground Practica
//1

console.log("Playground");

//2
//alert("Hola");

//3


let boton = document.querySelector("#abracadabra");
boton.addEventListener('click', function(){
   let nombre = prompt("¿Cómo es tu nombre?");
   let myname = document.querySelector("#titular");
   myname.innerHTML = "Hi. I'm <strong>"+nombre+"</strong>.";
});



//4
let intouch = document.querySelector("#intouch");
intouch.addEventListener('dblclick', function(){
    let parrafo = document.querySelector(".parrafo-color");
    parrafo.style.color = "red";
});

//5
function colorAlAzar(){
    let colores = ["green", "yellow", "purple", "orange", "blue"];
    let randomNumber = Math.floor(Math.random()*5);
    return colores[randomNumber];
};


//6
function randomcolor() {
    return Math.floor(Math.random() * 255);
    
};

intouch.addEventListener('dblclick', function(){
    let parrafo = document.querySelector(".parrafo-color");
    parrafo.style.color = "rgba('+randomcolor()+','+randomcolor()+','+randomcolor())";
});

//7
let section1 = document.querySelector(".box style1 left");
let section2 = document.querySelector(".box style1 center");
let section3 = document.querySelector(".box style1 right");

section1.addEventListener('click', function(){
    console.log(this);
});
section2.addEventListener('click', function(){
    console.log(this);
});
section3.addEventListener('click', function(){
    console.log(this);
});

let h3 = document.querySelector("#cl");
h3.addEventListener("click", function(){
    alert("Clickeaste sobre Consequat Lorem");
});

//8
let boton3 = document.querySelector("#recentwork");
boton3.addEventListener('mouseover', function(){
    let paragraph = document.querySelector(".parrafo2");
    paragraph.style.color = "rgba('+randomcolor()+','+randomcolor()+','+randomcolor())";
});
boton3.addEventListener('mouseout', function(){
    let paragraph = document.querySelector(".parrafo2");
    paragraph.style.color = "#888";
})

//9
let lechuza = document.querySelector("#lechuza");
lechuza.addEventListener('click', function(){
    alert("“Buh… Buh….");
});

//10
window.addEventListener('keydown', function(e){
    console.log("¡Ey! Tocaste el teclado");
});

//11
window.addEventListener('keypress', function(e){
    
});


