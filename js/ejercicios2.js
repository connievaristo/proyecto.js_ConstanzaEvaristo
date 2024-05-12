let nombre = "Connie";
const PI = 3.14;

/*
let esMayorDeEdad = prompt("Indicá tu edad.");


if (esMayorDeEdad >= 18) {
    console.log(esMayorDeEdad = true);
} else if(esMayorDeEdad<18 && esMayorDeEdad >= 0){
    console.log(esMayorDeEdad = false);
} else{
    alert("Ingresá una edad válida");
};
*/

/*
let edadUsuario = prompt("Indicá tu edad.");
alert("Hola!");
console.log("La edad ingresada es: " + parseInt(edadUsuario));
*/


let number = prompt("Ingresá un número entero.");

//Control de flujo con IF e IF ELSE
/*
if (number > 0 ){
    console.log("El valor es 2" + parseInt(number) + " y es positivo.");
} else if(number == 0){
    console.log("El valor  es " + parseInt(number));
} else if(number < 0){
    console.log("El valor es " + parseInt(number) + " y es negativo.");
} else {
    alert("Ingresá un valor válido.");
};
*/

/*Para el resto de una división: usamos el operador %

let resto = parseInt(number)%2;
console.log("El resto es " + resto);
*/
/*
if(number%2==0){
    console.log("Es un número par");
}else if(number%2>0){
    console.log("Es un número impar.");
}else{
    alert("Ingresá un número.");
};

if(parseFloat(number) > 100){
    console.log("El número ingresado es mayor a 100 (" + number + ").");
} else if(number == 100){
    console.log("El número ingresado es igual a 100");
} else if (number < 100){
    console.log("El número ingresado es menor a 100.");
} else {
    alert("Ingresá un número.");
};
*/

if (number % 2 == 0 && number % 3 == 0) {
    console.log("El número es divisible tanto por 2 y por 3");
} else if (number % 2 > 0 || number % 3 > 0 || number % 2 < 0 || number % 3 < 0 ) {
    console.log("No es divisible tanto por 2 como por 3")
} else {
    alert("Ingresá un número.");
};

if (number > 0 && number < 100){
    console.log(number + " es mayor que 0 y menor que 100");
} else {
    console.log("No cumple con la condición.");
};

if (number > 10 || number < -10){
    console.log(number + " es mayor que 10 o menor que -10.");
} else {
    console.log("No cumple con la condición.");
};

//faltan Ejercicios Adicionales.