function saludar() {
    console.log("Hola Chucho y Cacho!")
};

saludar(); //La tenés que llamar

function pedirNombre() {
    let ingresarNombre = prompt("Ingresá tu nombre");
    alert("Su nombre es " + ingresarNombre);
};

//pedirNombre();

function usandoParametros(parametro1, parametro2, parametro3) { //acá se llaman parámetros
    console.log(parametro1 + parametro2 + parametro3);
}

// usandoParametros(3,5,7); //cuando paso los valores en el llamado, se llaman ARGUMENTOS
// usandoParametros("a","b","c");
// usandoParametros(true,false,true); //te devuelve 2, xq true 1 y false 0

let resultado;

function sumar(p1, p2) {
    resultado = p1 + p2;
};

function mostrarResultado(resultado) {
    console.log(resultado);
}

//sumar(2, 3);
//console.log(resultado);
//mostrarResultado(resultado);

function sumarConReturn(p1, p2) {
    let resultadoConReturn = p1 + p2;
    return resultadoConReturn;
};

//console.log(sumarConReturn(6,2));

function sumarConReturnSinVariable(p1, p2) {
    return p1 + p2;
};

let res = sumarConReturnSinVariable(12, 6); //a diferencia de las funciones SIN return, esta tiene un resultado implícito.
//console.log(res);

//Vamos a hacer una calculadora
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            if (numero2 == 0) {
                alert("No se puede dividir por cero");
            } else {
                return numero1 / numero2;
            };
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(2, 2, "/"));

//Funciones anónimas
const suma = function (a, b) { return a + b };
const resta = function(a,b){return a - b};
const algo = function () {return console.log("Algo")};

// console.log(suma(3,4));
// console.log(resta(10,9));
// algo();

//Funciones flecha
const multiplicar = (a,b) => {return a * b};
const restaFlecha = (a,b) => console.log(a-b); //ej. sin return y {}, xq tiene una sola línea
const iva = x => x * 0.21;

multiplicar(2,3);
restaFlecha(8,6);
console.log(iva(100));

const dividir = (a,b) => {
    if(b != 0){
        return a / b
    } else{
        alert("No se puede dividir por cero");
    };
};

console.log(dividir(9,3));