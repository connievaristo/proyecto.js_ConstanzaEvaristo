const sumar = function (a, b) { return a + b };
console.log(sumar(2, 3));

const multiplicar = function (a, b, c) { return a * b * c };
console.log(multiplicar(2, 4, 5));

//F. anónima
const cuadrado = function (a) { return a * a };
console.log(cuadrado(3));

//F. flecha
const esPar = (a) => {
    if (a % 2 == 0) {
        return true;
    } else {
        return false
    }
};
console.log(esPar(40));

function saludarNombre(nombre) {
    return console.log("Hola " + nombre)
};
saludarNombre("Connie"); //"Hola Connie"

function calcularAreaRectangulo(b, h) {
    return b * h
};
console.log(calcularAreaRectangulo(2, 1.5));

const numeroMayor = function (a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else if (a === b) {
        return "Son iguales";
    } else {
        return "comparación no válida"
    };
};
console.log(numeroMayor(8,10)); //10

const doble = (a) => {return a*2};
console.log(doble(5));