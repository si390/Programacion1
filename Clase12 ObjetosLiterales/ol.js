//Propiedades y métodos//
let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    saludar: function(){
        return '¡Hola! Me llamo ' + this.nombre;
    }
};
console.log(tenista.saludar());


let estudiante = {
    //propiedad: valor
    name: 'Tito',
    lastname: 'El Bambino',
    age: 55,
    //Es importante usar this.objeto
    greet: function(){
        return this.name + " " + this.lastname;
    }
}
console.log(estudiante.greet());

//Con  arrays
let alumnos = [{
    nombre: 'Juan',
    apellido: 'Lopez',
    edad: 23,
    regularidad: true,
}, {
    nombre: 'Delfina',
    apellido: 'Rios',
    edad: 22,
    regularidad: true,
    materias: ['IRM', 'Economia'],
}, {
    nombre: 'Lucas',
    apellido: 'Rodriguez',
    edad: 21,
    regularidad: false,
}
]
console.log(alumnos[0].apellido);
console.log(alumnos[1].nombre);
console.log(alumnos[2].edad);
console.log(alumnos[1].materias[1]);

//Practica PlayGround
//1
let misDatos = {
    nombre: 'Sebastian',
    apellido: 'Alonso',
    edad: 21,
    dni: 45459000,
    comidasFavoritas: ['asado', 'lasagna', 'hamburguesa'],
    saludar: function (){
        return 'Hola, mi nombre es ' + this.nombre + " " + this.apellido + ' y tengo ' + this.edad + ' años' + '. Mi primer comida favorita es la ' + this.comidasFavoritas[0];
    }
}
//2
console.log(misDatos.saludar());

//3
let auto = {
    marca: 'Peugeot',
    modelo: 3008,
    anio: 2023,
    color: 'plata',
    posicion: 0,

}

//5
let ironMan = {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    energia: 100,
    getPoder: function() {
        return this.energia-10 + '. ' + 'Poder elegido de ' + this.nombre + ': ' + this.poderes[1] + '. Energía restante: ' + this.energia + '.'
        
    }
}
console.log(ironMan.getPoder());

let Hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ['Aplastar', 'Gritar', 'Golpear'],
    energia: 100,
    getPoder: function(){
        let energia = 90;
        return energia - 10 + '. ' +'Poder elegido de ' + this.nombre + ': ' + this.poderes[0] + '. Energía restante: ' + this.energia + '.'
    }
    
}
console.log(Hulk.getPoder());