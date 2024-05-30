//Arrays
const arrayVacio = [];

//Tipo de datos dentro del Array
const arrayNumerico = [1, 2, 3, 4, 5, 5.5];

const arrayConLetras = ['a', 'b', 'c']; //Las letras van con ''

const arrayConString = ["Hola", "Connie", "Qué", "tul?"]; //las palabras van con ""

const arrayBoolean = [true, false, true];

const arrayMixto = ['a', 23, "Connie", true];

const arrayObjetos = [
    { nombre: "Producto1", cantidad: 5 },
    { nombre: "Producto2", cantidad: 8 }
];

const arrayMixtoConObjetos = ['a', 23, "Connie", true, { nombre: "Producto3", cantidad: 2 }];

//Acceder al array (la posición va desde 0)
console.log(arrayNumerico[0]); //ves el 1
console.log(arrayObjetos[1]);

for (let index = 0; index < 5; index++) { //si querés sí o sí un carrusel con n cant de fotos, te conviene esto.
    console.log(arrayNumerico[index]);
};

console.log(arrayNumerico.length); //va a contar 6 elementos

for (let index = 0; index < arrayMixtoConObjetos.length; index++) {
    console.log(arrayMixtoConObjetos[index] + " con lenght");
};

//Agregar objetos a un Array
arrayMixto.push("Al final"); //agrego al final
console.log(arrayMixto);
arrayMixto.unshift("Al principio"); //agrego al principio
console.log(arrayMixto);
//Eliminar objetos de un Array
console.log(arrayMixto.pop()); //elimina y devuelve el último elemento del array
console.log(arrayMixto);
arrayMixto.shift(); //elimina primer elemento. NO RECOMENDADO
console.log(arrayMixto);
arrayMixto.splice(2, 1);//Splice permie eliminar uno o varios elementos de un array. Parámetros: primero es la posición y el segundo es la cantidad a eliminar DESDE ahí.
console.log(arrayMixto); //ves q Connie ya no está

//Join: genera un String con TODOS los elementos del array con el elemento q declares
console.log(arrayConString.join(" ")); //vas a ver q dice: Hola Connie Qué tul?

console.log(arrayConString.concat(arrayMixto));

//Slice: te hace un array nuevo con una copia del array desde el inicio hasta el final (no incluido)
const nuevoArrayConString = arrayConString.slice(0, 2);
console.log(nuevoArrayConString); //este dice [Hola], [Connie]
//indexOf te da la posición de ese elemento
console.log(nuevoArrayConString.indexOf("Hola"));
//Reverse: te lo da vuelta
console.log(arrayConString);
console.log(arrayConString.reverse());

//Array con Objetos
arrayObjetos.push({ nombre: "Producto3", cantidad: 12 });
console.log(arrayObjetos);

const productos = [
    { id: 1, producto: "Arroz" },
    { id: 2, producto: "Fideos" },
    { id: 3, producto: "Azúcar" }
];

//para acceder a c/u de los atributos de los objetos
for (const producto of productos) { //entra a cada elemento de ese array, producto puede ser "index" pero el array tiene q ser el nombre del array
    console.log("El ID es: " + producto.id); //acá entra al atributo id
    console.log("El nombre del producto es " + producto.producto) //ahora a producto
    console.log(producto) //ahora a todos y todo
};

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumaarIva() {
        this.precio = this.precio * 1.21;
    }
};

const carrito = [];
console.log(carrito);
carrito.push(new Producto(1, "Arroz", 1000));
carrito.push(new Producto(2,"Fideos",1100));
carrito.push(new Producto(3,"Yerba",1500));
console.log(carrito);

for (const productoCarrito of carrito){
    productoCarrito.sumaarIva();
}

console.log(carrito[1]);