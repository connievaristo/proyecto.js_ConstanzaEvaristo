//Funciones de orden superior

//Analizamos este código que acumula la suma del contador con una iteración

/*
let total = 0;
for(let i = 0; i <= 5; i++){
    total += i; //Asignación de Adición: a lo que valga total, le suma i
};

console.log(total);

Lo hacemos de otra manera: FUNCIONES DE ORDEN SUPERIOR

function sumarRango(inicio, fin) {
    let total = 0;
    for (let i = inicio; i <= fin; i++) {
        total += i;
    }
    return total;
};

console.log(sumarRango(1,10)); //da 55

console.log(sumarRango(0,12)); //da 78
*/

//Ejemplo

function mayorQue(numero) { //sería el 10
    return (numeroAComparar) => numeroAComparar > numero;
};

const mayorQueDiez = mayorQue(10); //Construyo nueva función, ahora queda así: const mayorQueDiez = (numeroAComparar) => numeroAComparar > 10 (recube el return de MayorQue)
console.log(mayorQueDiez(12)); //Acá le paso el 12 a mayorQueDiez y numeroAComparar es el parámetro de esa. Este te da TRUE
console.log(mayorQueDiez(8)); //FALSE

//Otro ejemplo:

function asignarOperacion(operacion) {
    if (operacion == "sumar") {
        return (a, b) => a + b;
    } else if (operacion == "restar") {
        return (a, b) => a - b;
    };
};

const funcionSumar = asignarOperacion("sumar"); //return (a, b) => a + b;
console.log(funcionSumar(4, 1)); //5 - si seleccionás y te parás, ves lo que tiene dentro
const funcionRestar = asignarOperacion("restar");
console.log(funcionRestar(3, 2)); //1

//Recibir una función por PARÁMETRO (antes recibimos nro o string)
function porCadaElemento(myArray, myFunction) {
    for (const elemento of myArray) { //por c/elemento del array, ejecuta la función
        myFunction(elemento);  //Se va a aplicar a c/elemento del array
    };
};

const numeros = [1, 2, 3, 4, 5];
porCadaElemento(numeros, console.log); //myArray = numeros y myFunction = console.log (es lo que quiero que hagar)

//porCadaElemento(numeros,alert); //te muestra cartelito por c/número del array

let total = 0;
function acumuladora(numero) {
    total += numero;
};

porCadaElemento(numeros, acumuladora);
console.log("Total acumulado, función acumuladora: " + total); //1+2 = 3, 3+4= 7, 7+5=15

const numerosDuplicados = [];
porCadaElemento(numeros, (elemento) => { //en myFunction = función anónima (flecha)
    numerosDuplicados.push(elemento * 2);
});

console.log(numerosDuplicados); //[2, 4, 6, 8, 10]
console.log(numerosDuplicados.join(", ")); //lo ves así: 2, 4, 6, 8, 10

//Funciones de transformación y búsqueda de JavaScript

//forEach()

numerosDuplicados.forEach((numero) => { //lo mismo que porCadaElemento(numeros, console.log);
    console.log(numero);
});

let nuevoArray = [];

numerosDuplicados.forEach((numeros) => {
    nuevoArray.push(numeros - 1);
});

console.log(nuevoArray); //[1, 3, 5, 7, 9]

//find()
const cursos = [
    { nombre: "JavaScript", cantidadAlumnos: 120 },
    { nombre: "React", cantidadAlumnos: 90 },
    { nombre: "Backend", cantidadAlumnos: 60 }
];

const resultadoFind = cursos.find((elemento) => elemento.nombre === "JavaScript");
console.log(resultadoFind); //encontró: {nombre: 'JavaScript', cantidadAlumnos: 120}

//filter()
const resultadosFilter = cursos.filter((elemento) => elemento.nombre.includes("JavaScript"));
console.log(resultadosFilter); //{nombre: 'JavaScript', cantidadAlumnos: 120}

//some() ve si existe algo con ese nombre. Devuelve true o false.
const resultadoSome = cursos.some((elemento) => elemento.nombre === "javaScript");
console.log(resultadoSome); //false, no está escrito igual.

//map() crea un nuevo array con todos los mismos elementos, pero con la condición que yo le ponga
const resultadoMap = cursos.map((elemento) => elemento.nombre); //extrae solo los nombres
console.log(resultadoMap); //['JavaScript', 'React', 'Backend']

//Hago un nuevo array con la cantidad de alumnos actualizada -esto se usa mucho-.
const actualizarAlumnos = cursos.map((elemento) => {
    return {
        nombreNuevo: elemento.nombre, cantidadAlumnosNuevo: elemento.cantidadAlumnos + 20
    }
});

console.log(actualizarAlumnos); //ej Js da 140, React 110 y Backend 80.

//reduce() obtiene un solo valor dsp de iterar/acumular sobre el array
const totalNumeros = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0); //ese 0 lo suma. si fuera 10, daría 25
console.log(totalNumeros); //15

//sort() permite reordenar un array según el criterio que definamos, pero se lo hace al array original!
//están predefinidos como vimos: a-b es asc y b-a desc

const numerosSort = [99, 98, 97, 96, 95];

numerosSort.sort((a, b) => a - b); //Forma ASCENDENTE: [95, 96, 97, 98, 99]
console.log(numerosSort);

numerosSort.sort((a, b) => b - a); //Forma DESCENDENTE: [99, 98, 97, 96, 95]
console.log(numerosSort);

//ejemplo sort() con objetos

const cursosSort = [
    { nombre: "JavaScript", cantidadAlumnos: 120 },
    { nombre: "React", cantidadAlumnos: 90 },
    { nombre: "Backend", cantidadAlumnos: 60 }
];

cursosSort.sort((a, b) => { //ordena en nombre alfabético según NOMBRE
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    } return 0;
});

console.log(cursosSort); 

/*
cursosSort.sort((a, b) => { //ordena en nombre alfabético según NOMBRE
    if (a.cantidadAlumnos > b.cantidadAlumnos) {
        return 1;
    }
    if (a.cantidadAlumnos < b.cantidadAlumnos) {
        return -1;
    } return 0;
});

console.log(cursosSort); //ordena de menor a mayor por cantidad de alumnos
*/