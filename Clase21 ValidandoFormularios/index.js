console.log("Validando formularios");
//Podemos capturar un campo usando clases o también con el atributo name.
//focus
let campoEmail = document.querySelector("[name=email]");
campoEmail.addEventListener('focus', function() { 
    //Nuestro código a ejecutar
});

//blur
campoEmail.addEventListener('blur', function() {
    //Nuestro dcódigo a ejecutar
});

//input
campoEmail.addEventListener('input', function(){
    //Nuestro código a ejecutar
});

//submit
let formulario = document.querySelector("form");
formulario.addEventListener('submit', function(event){
    event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse
    if('campo vacío'){
        //Informamos al usuario en el html
    }
});

//value
let campoBuscar = document.querySelector(".campoBuscar");
if(campoBuscar.value==""){
    //Informamos al usuario en el HTML
}

//submit y value
formulario.addEventListener('submit', function(event){
    event.preventDefault(); //Detenemos el comportamiento default del formulario que es enviarse
    if(campoBuscar.value==""){ //Chequeamos el contenido
        //Informamos al usuario en el HTML
    } else{
        this.submit() //Si no hay errores entonces enviamos el formulario con el método submit() 
    }
    
});