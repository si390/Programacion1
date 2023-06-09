console.log("Demo Fetch");

//Fetch
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


//Crear la funcionalidad para crear un nuevo gif
let nuevogif = document.querySelector(".nuevogif");

nuevogif.addEventListener("click", function(e){
    e.preventDefault();
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
})


//Provincias Array
let urlprovincias = "https://apis.datos.gob.ar/georef/api/provincias";

fetch(urlprovincias)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let provinciasContainer = document.querySelector(".provincias");
        let arrayProvincias = data.provincias;
        let provincias = ""
        for (let i = 0; i < arrayProvincias.length; i++){
            //cada vuelta del for tiene que armar un elemento de la lista
           //provincias += "<li>" + arrayProvincias[i].nombre +"</li>" 
           //Otra forma provincias = "<li>" + arrayProvincias[i].nombre +"</li>" + provincias
           provincias += `<li>${arrayProvincias[i].nombre}</li>`
        }

        provinciasContainer.innerHTML = provincias;

    })
    .catch(function (error) {
        return console.error(error);
    })

