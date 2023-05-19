console.log("DEMO");

//window.addEventListener("click", function(e) {
//    console.log(e);
//});


//Capturar
let link = document.querySelector("a");

//Definir addEventListener y sus partes
link.addEventListener('click', function(e) {
    this.style.color = "red";
    e.preventDefault(); //comportamiento default del HTML, lo tenemos que frenar
});