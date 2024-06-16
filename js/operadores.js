//Clase OPERADORES AVANZADOS I
//este js lo agrega como operadores.js en index del coso q venimos trabajando

//SUGAR SYNTAX: operadores avanzados q funcan como simplifacaciones, busca reducir el código reutilizándolo - evita repetir código!
//Operador ++
let num = 10;

num = num + 1;
num += 1; //es lo mismo lo de arriba y esto o lo de abajo
num++;

//Operador ternario:
//condición ? caso 1 (verdadero) : caso 2 (false)

let temparatura = 30;
/*
if(temparatura > 24) {
    console.log("Hace calor");
} else {
    console.log("Está templado")
};

Así lo haríamos con operador ternario:
*/
temparatura > 24 ? console.log("CALOR") : console.log("TEMPLADO");

const usuario = {
    nombre: "Connie",
    edad: 25
};

// let permiso;

// if (usuario.edad >= 18){
//     permiso = true;
// } else {
//     permiso = false;
// };

// if (permiso) { //es lo mismo q poner (permiso == true)
//     console.log("Puede consumir alcohol")
// } else{
//     console.log("No puede consumir alcohol")
// };

//lo hacemos con Sugar Syntax
const permiso = (usuario.edad >= 18) ? true : false;
permiso ? console.log("Puede consumir alcohol") : console.log("No puede consumir alcohol"); //permiso = permiso == true

//Operador lógico AND o &&
const carrito = [];
/*
if(carrito.length === 0){ //está vacío
    console.log("Carrito vacío")
};

Si lo de antes del && es verdadero, ejecuta lo q viene después
*/
carrito.length === 0 && console.log("Carrito vacío!"); //devuelve "Carrito vacío"

//Operador lógico OR o ||
//devuelve el Falsy = falso, nulo, algo vacío, etc.
console.log(0 || "Falsy"); //devueve falsy
console.log(null || "Falsy"); //devueve falsy
console.log(undefined || "Falsy"); //devueve falsy
console.log("" || "Falsy"); //devueve falsy
console.log(false || "Falsy"); //devuelve falsy
console.log(NaN || "Falsy"); //devuelve falsy
console.log(40 || "Falsy"); //devuelve 40
console.log("Hola Connie" || "Falsy"); //devuelve 40
console.log(true || "Falsy"); //devueve true

//Operador lógico NULISH o ??
//muestra Nullish cuando sea NULo o INDEFINIDO
console.log(0 ?? "Nullish"); //devueve 0
console.log(null ?? "Nullish"); //devueve Nullish 
console.log(undefined ?? "Nullish"); //devueve Nullish
console.log("" ?? "Nullish"); //devueve "" (nada)
console.log(false ?? "Nullish"); //devuelve false
console.log(NaN ?? "Nullish"); //devuelve NaN
console.log(40 ?? "Nullish"); //devuelve 40
console.log("Hola Connie" ?? "Nullish"); //devuelve 40
console.log(true ?? "Nullish"); //devueve true

//Ejemplo OR ||
const usuario1 = {
    nombre: "Sansa",
    edad: 3
};

const usuario2 = null;

console.log(usuario1 || "El usuario no existe"); //si existe trae a usuario1
console.log(usuario2 || "El usuario no existe"); //no existe, trae: el usuario no exite

//Si espero un vacío, un NaN, un false -> uso el OR

//Ejemplo NULISH ??
const carrito1 = localStorage.getItem('carrito') ?? []; //Si de antemano espero una rspta null o undefined, uso ??
console.log(carrito1); //devuelve el []

//Acceso condicional a un objeto
console.log(usuario1.nombre);
//console.log(usuario2.nombre); //da error porq está vacío

//Uso ? antes de acceder - Acceso condicional:
console.log(usuario1?.edad || "Usuario no existe");
console.log(usuario2?.nombre || "Usuario no existe"); //el ? dsp del usuario es como que checkea, entonces funciona OK

//DESESTRUCTURACIÓN
const user = {
    nombre: "Chucho",
    id: 1,
    edad: 3,
    cursos: {
        desarrolloweb: "Aprobado",
        javascript: "En curso"
    }
};
// let nombre = user.nombre;
// let edad = user.edad;
// console.log(nombre);
// console.log(edad);
//Llamar a todos los atributos de ese objeto para no hacerlo uno por uno. Esto es desestructuración:

// let {nombre , edad , cursos: {desarrolloweb, javascript}} = user; //lo puedo guardar en un const
// console.log(nombre);
// console.log(edad);
// console.log(desarrolloweb);

//Hacerlo con un alias:
const producto = {
    nombre: "Azúcar",
    precio: 1200
};

let { nombre: nombreProducto, precio: precioProducto } = producto; //error porque NOMBRE ya declaraste arriba (lo comentaste) -> mejor usar SIEMPRE alias, el nombreProducto sería el alias

//Destructuración en parámetros
const desestructurarObjetos = (objeto) => {
    const { id, nombre, edad } = objeto
    console.log(id, nombre, edad)
};

const userDos = {
    nombre: "Sansa",
    id: 2,
    edad: 4,
    cursos: {
        desarrolloweb: "Aprobado",
        javascript: "No iniciado"
    }
};

desestructurarObjetos(user); //1 'Chucho' 3
desestructurarObjetos(userDos); //2 'Sansa' 4

//Desestructurar Atributos

const desestructurarAtributos = ({ id, nombre, edad }) => {
    console.log(id, nombre, edad)
};

desestructurarAtributos(user);
desestructurarAtributos(userDos);

//¿Cuál conviene más? Depende el caso. La primera opción está buena si tenés más atributos, tipo 48, xq en el segundo si no tenés q poner todos en el ()

//Desestructuración de Arrays
const nombresPersonas = ["Connie", "Chucho", "Cacho", "Sansa"];
console.log(nombresPersonas[0]);
console.log(nombresPersonas[1]);
console.log(nombresPersonas[2]);
//qué pasa si tengo MUCHOS? -> desestructuración:
//console.log(nombresPersonas.length); //4
const [a, b, c, d] = nombresPersonas; //4 letras porq hay 4 elementos
console.log(a, b, c, d);

//Podés ponerlo así: const [, , a , b] = nombresPersonas

//clase q sigue: temas clase 8 - 12: fijate los temas en la slide de ESTA clase (Operadores avanzados I)
//TERCERA CLASE: Prohibido alert y prompt. Amigate con DOM y eventos.

