//querySelector() captura un solo elemento del DOM
let titulo = document.querySelector(".title");

//querySelectorAll() permite capturar un grupo de elementos del DOM. Retorna un array
let viñetas = document.querySelectorAll("li");

//Propiedad style permite leer y sobreescribir el estilo de un elemento
let title = document.querySelector(".mainTitle");
title.style.color = "black";
title.style.fontSize = "12px";
title.style.backgroundColor = "#dddddd";


//MODIFICANDO CONTENIDO
//innerText Retorna el texto dentro de un elemento html y permite modificarlo
let nuevoTexto = document.querySelector("p").innerText = "Nuevo texto usando innerText";

//innerHTML Retorna la estructura html de un elemento y permite modificarla
let htmlMoficado = document.querySelector("h3").innerHTML = "Utilidades del <strong>DOM</strong>";
