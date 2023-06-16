let url = "https://rickandmortyapi.com/api/character";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        let contenedor = document.querySelector(".content");
        let elementos = [];

        for (let i=0; i<data.results.length ;i++){
          
            elementos += `<article>
                <img src="${data.results[i].image}" alt='' />
                <p>Name: ${data.results[i].name} </p>
                <p>Status: ${data.results[i].status} </p>
                <a href="/detalle?id=${data.results[i].id}">ir a detalle</a>
            </article>`
        }

        contenedor.innerHTML = elementos


    })
    .catch(function(error){
        console.log(error)
    })
