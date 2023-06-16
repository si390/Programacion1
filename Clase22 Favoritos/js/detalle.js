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


linkFavs.addEventListener('click', function(e){
    e.preventDefault();

    gifFavoritos.push(id);
    gifsAJson = JSON.stringify(gifFavoritos);
    localStorage.setItem("listaFavoritos", gifsAJson)

    console.log(localStorage);
})