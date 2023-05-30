console.log("Clase 19: Fetch");
//JSON
//{
    //"prop1": "String",
    //"prop2": 1,
    //"prop3": [],
    //"prop4": true,
//}

//FETCH
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127') //El método fetch recibe un parámetro que será la ruta desde donde queremos obtener información, esa info viene en formato json. La ruta se suele identificar como "endpoint"
    .then(function (response) { //método then() con una función anónima callback para procesar resultado de fetch
        return response.json(); //método json decodifica la información en formato json y la convierte en el tipo de dato correspondiente (array, objeto literal, etc)
    })
    .then(function (data) { //parámetro data recibe la información decodificada del método then ()
        console.log(data); //Aquí trabajaremos con la información obtenida de la API
    })
    .catch(function (error) { //el método catch() atrapará los errores en cualquier instancia del fetch()
        console.log('El error es '+ error);
    })

//Template strings
let nombre = "Sebastian";
let apellido = "Alonso";
console.log(`Hola ${nombre} ${apellido}`);

let nombre2 = "Tom";
let age = 67;
console.log(`Soy ${nombre2}, tengo ${age} y el próximo año cumpliré ${age + 1}`);