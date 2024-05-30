const personas = [
    { nombre: "Connie", edad: 25, ciudad: "Buenos Aires" },
    { nombre: "Verónica", edad: 50, ciudad: "Buenos Aires" },
    { nombre: "Marcelo", edad: 56, ciudad: "Buenos Aires" }
];

console.log(personas[0].nombre); //Connie

//Agregar nueva persona:
personas.push({ nombre: "Bianca", edad: 23, ciudad: "Buenos Aires" });
console.log(personas);
console.log(personas[1]);

//Constructor con Array
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
};

const productos = [];
productos.push(new Producto("Leche", 1500, 50));
productos.push(new Producto("Café", 6000, 25));
productos.push(new Producto("Hileret", 2500, 20));

console.log(productos);

//Métodos y Operaciones: Creación AGENDA
const agenda = {
    contactos: [], //propiedad del objeto
    agregarContacto: function (contacto) {
        this.contactos.push(contacto)
    },
    agendas: [],
    agregarAAgenda: function () {
        this.agendas.push(this.contactos);
    }
};

agenda.agregarContacto({ nombre: "Connie", telefono: 1149469628 });
agenda.agregarContacto({ nombre: "Sansa", telefono: 1111111111 });
agenda.agregarAAgenda(agenda.contactos);
console.log(agenda.agendas); //Se ve a Connie y a Sansa

agenda.buscarContacto = function (nombre) {
    return this.contactos.find((contacto) => contacto.nombre === nombre) //FIND: lo ves en next clase
};

console.log(agenda.buscarContacto("Connie")); //{nombre: 'Connie', telefono: 1149469628}

class Mascota {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    esMayor() {
        if (this.edad >= 5) {
            return true
        } else {
            return false
        }
    };
};

const cacho = new Mascota("Caio", 2, "Gato");
console.log(cacho);
console.log(cacho.esMayor()); //false

//Crear playlist de canciones

const playlist = {
    canciones: [],
    agregarCancion: function(cancion){
        this.canciones.push(cancion);
    }
};

playlist.agregarCancion({cancion: "Fortnight", artista: "Taylor Swift"});
playlist.agregarCancion({cancion: "Houdini", artista: "Dua Lipa"});
console.log(playlist.canciones);

//agregar playlist:
const playlistsNueva = [];

const agregarPlaylist = function(playlist){
    playlistsNueva.push(playlist)
};

agregarPlaylist(playlist); //Se agrega la playlist al array playlists usando la función agregarPlaylist.

playlistsNueva[0].agregarCancion({cancion:"Radical Optimism", artista:"Dua Lipa"});
console.log(playlistsNueva[0]);

playlist.eliminarCancion = function(){ //elimina la última del array - VER CLASE QUE SIGUE
    this.canciones.pop()
},

playlist.eliminarCancion();
console.log(playlist.canciones);

