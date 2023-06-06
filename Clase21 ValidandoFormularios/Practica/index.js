console.log("Practica Playground Validar Form");
let url = "https://api.giphy.com/v1/gifs/random?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&tag=&rating=g";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.data.title);
        let titulogif = document.querySelector(".titulogif");
        if (data.data.title == "") {
            titulogif.innerText = "Este gif no tiene titulo"
        } else{
            titulogif.innerText = data.data.title
        }

        let imagen = document.querySelector(".gif");
        imagen.src = data.data.images.original.url

    })
    .catch(function (error) {
        return console.error(error);
    })

//Validar FORMULARIOS
let formulario = document.querySelector("form");
let campoBuscar = document.querySelector("input");

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if(campoBuscar.value===" "){ 
        alert("El campo es obligatorio")
    } else if(campoBuscar.value.length < 4){
        alert("Debes escribir como mínimo 3 caracteres")
    } else{
        this.submit()
    }
});