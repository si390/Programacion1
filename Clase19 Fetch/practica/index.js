console.log("Practica Playground Rick and Morty");

let url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
    
let seccion = document.querySelector(".characterList");
    let arraycharacters = data.results
    let characters = ""

    for(let i = 0; i < arraycharacters.length; i++){
        characters += `<article>
                            <img src=${arraycharacters[i].image} alt='' />
                            <p>Name: ${arraycharacters[i].name}</p>
                            <p>Status: ${arraycharacters[i].status}</p>
                        </article>`

    }
        seccion.innerHTML = characters;
})
.catch(function(error) {
    console.log("Error: " + error);
})
