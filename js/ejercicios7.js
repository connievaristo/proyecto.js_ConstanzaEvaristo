//Usa forEach para imprimir cada elemento de un array de números.
const arrayNumeros = [1,2,3,4,5,45,50,43,46,52];

arrayNumeros.forEach((numero) => {
    console.log(numero)
});

//Utiliza find para encontrar el primer número mayor que 50 en un array de números.
arrayNumeros.find((numeroMayorA50) => {
    numeroMayorA50 > 50;
}); //52

//Emplea filter para obtener todos los números pares de un array de números.
const nrosPares = arrayNumeros.filter((nrosPares) => {
    return nrosPares % 2 == 0
});
console.log(nrosPares); //[2, 4, 50, 46, 52]

//Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres.
const arrayPalabras = ["Conito", "Chuchito", "Cachito", "Sansitaaaaaa", "A Casa do Dragao"];

const palabraDiez = arrayPalabras.some((palabra) => {
    return palabra.length >= 10
});
console.log(palabraDiez); //true

//Usa map para duplicar cada elemento de un array de números.
const arrayDuplicado = arrayNumeros.map((numeros) => {
    return numeros*2
});
console.log(arrayDuplicado); //[2, 4, 6, 8, 10, 90, 100, 86, 92, 104]

//Emplea reduce para obtener la suma de todos los elementos de un array de números.
const sumaArray = arrayNumeros.reduce((acumulador,numero) => acumulador + numero,0);
console.log(sumaArray); //251

// Utiliza sort para ordenar un array de palabras alfabéticamente.
arrayPalabras.sort((a,b) => {
    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
});
console.log(arrayPalabras); //(5) ['A Casa do Dragao', 'Cachito', 'Chuchito', 'Conito', 'Sansitaaaaaa']

// Crea una clase Alumno con las propiedades "nombre", "edad" y "notas" (un array de números). Crea varios objetos Alumno y realiza operaciones con ellos (calcular promedio de notas, encontrar el alumno con la mejor nota, etc.) utilizando funciones de orden superior.
class Alumno{
    constructor(nombre,edad,notas){
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    };
    calcularPromedio(){
        const sumaNotas = this.notas.reduce((acumulador,numero) => acumulador + numero, 0)
        return Math.round(sumaNotas / this.notas.length);
    };
    mejorNota(){
        return Math.max(...this.notas) //los ... (de antes del this.notas) son un SPREAD OPERATOR, toma al array y lo expande en elementos individuales, xq si no, al buscar el Max en un array, te da NaN. Acá los pone como una lista de numeros separados
    };
};

const connie = new Alumno("Constanza", 15, [10,9,6,7,8,9]);
const chuchitux = new Alumno("Chucho", 15, [8,9,8,10,8,5]);
const cachitux = new Alumno("Cacho", 14,[5,4,10,10,9,9])
console.log(connie); 

console.log(connie.calcularPromedio()); //8
console.log(chuchitux.mejorNota()); //10

// Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit.

// Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $50.

// Usa forEach para imprimir la tabla de multiplicar de un número específico (por ejemplo, 5).

// Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30% en un array de productos.

// Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno.