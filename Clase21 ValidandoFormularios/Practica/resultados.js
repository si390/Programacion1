let qs = location.search //qs en formato texto
let qsobject = new URLSearchParams(qs);

let datoAbuscar = qsobject.get("buscar") //Necesito lo que el usuario escribió en el form

let endpointsearch = `https://api.giphy.com/v1/gifs/search?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&q=${datoAbuscar}&limit=10&offset=0&rating=g&lang=en`

fetch(endpointsearch)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    let seccion = document.querySelector(".gifs");
    let arraygifs = data.data
    let gifs = []

    for(let i = 0; i < arraygifs.length; i++){
        gifs +=         `<article>
                            <img src=${arraygifs[i].images.original} alt='' />
                            <p>Name: ${arraygifs[i].title}</p>
                            <p>Url: ${arraygifs[i].url}</p>
                        </article>`

    }
        seccion.innerHTML = gifs;

})
.catch(function(error) {
    console.log("Error: " + error);
})