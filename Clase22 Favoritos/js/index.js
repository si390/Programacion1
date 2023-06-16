let gifsTrending = "https://api.giphy.com/v1/gifs/trending?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&limit=5&offset=0&rating=g&bundle=messaging_non_clips"

fetch(gifsTrending)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let listaContainer = document.querySelector('.trending');
        
        let gifs = ""

        for (let i=0; i<data.data.length;i++){
           gifs += `<article>
                        <img src=${data.data[i].images.original.url}>
                        <a href="detalle.html?id=${data.data[i].id}">Ir a detalle</a>
                    </article>`
        }

        
        listaContainer.innerHTML = gifs


    })
    .catch(function(error){
        console.log(error)
    })