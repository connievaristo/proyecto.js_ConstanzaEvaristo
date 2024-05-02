console.log("Hola mundo desde script1");

var palabra ="hola";
palabara   = "how are u";

var palabra = "mundo";

let word = "chau";
console.log(word);
//let word = "Hello" //TE DA ERROR! No te deja hacer esta declaración
word = "hello again"; //reasigno
console.log(word);   

const CODER = "Coderhouse";
console.log(CODER);

//Malas prácticas
let nombre1 = "Constanza";
let nombre2 = "Verónica";
let año = 2024; //la ñ en inglés no está, puede generar errores

//Buenas prácticas con camelCase
let primerNombre = "Constanza";
let segundoNombre = "Verónica";
let year = 2024; //ej en reemplazo de año

//Formas de declarar Number - no hace falta declarar qué tipo de Number es, lo detecta solo
let nro1 = 200; //entero
let nro2 = 20.5; //float
const NRO3 = 200;

//Operaciones básicas

let a = 1;
let b = 2;

const RESULTADO1 = a + b;
const RESULTADO2 = a - b;
const RESULTADO3 = a * b;
const RESULTADO4 = a / b;
const BLANCO = " ";

console.log(RESULTADO1);
console.log(RESULTADO2);
console.log(RESULTADO3);
console.log(RESULTADO4);

const NOMBRE_COMPLETO = primerNombre + " " + segundoNombre;
console.log(NOMBRE_COMPLETO);
const NOMBRE_COMPLETO_BLANCO = primerNombre + BLANCO + segundoNombre;
console.log(NOMBRE_COMPLETO);