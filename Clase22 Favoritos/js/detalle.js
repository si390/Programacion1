console.log('detalle');

let qs = location.search;
let qsObj= new URLSearchParams(qs);
let id = qsObj.get('id')


let unGif = `https://api.giphy.com/v1/gifs/${id}?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&rating=g`

fetch(unGif)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        let imagen = document.querySelector('img');
        imagen.src = data.data.images.original.url
    })
    .catch(function(error){
        console.log(error)
    })


//Quiero guardar info en local storage
let linkFavs = document.querySelector('a');

let recuperoStorage = localStorage.getItem('listaFavoritos');
let storageToArray = JSON.parse(recuperoStorage);

let gifFavoritos = [];

if(recuperoStorage !== null){
    gifFavoritos = storageToArray
}

//Cambiar agregar por quitar
if(gifFavoritos.includes(id)){
    linkFavs.innerText = "Quitar de favoritos";
}


linkFavs.addEventListener('click', function(e){
    e.preventDefault();
    //Preguntar si un elemento está en el array
    if(gifFavoritos.includes(id)){
        //Si el elemento ya está entonces que lo saque
        let posicion = gifFavoritos.indexOf(id);
        gifFavoritos.splice(posicion, 1);
        linkFavs.innerText = "Agregar a favoritos";
    } else{
        //Cambiar agregar por quitar
        gifFavoritos.push(id);
        linkFavs.innerText = "Quitar de favoritos";
    }



    gifsAJson = JSON.stringify(gifFavoritos);
    localStorage.setItem("listaFavoritos", gifsAJson)

    console.log(localStorage);
})

//Adentro del for ponemos un fetch para lograr que se visualice en la pagina