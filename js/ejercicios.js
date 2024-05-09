//Ejercicios CONSOLA (console.log y console.error)
console.log("Hola mundo");

let myName = "Constanza";
console.log(myName);

console.error("error?");

//Ejercicios PROMPT
let yourName = prompt("Ingresá tu nombre");
console.log(yourName);
let yourAge = prompt("Ingresá tu edad");
console.log("Tu nombre es " + yourName + " y tenés " + yourAge + " años.");

//Ejercicios ALERT
alert("Bienvenido a Ejercicios Clase 1");

let favFood = prompt("¿Cuál es tu comida favorita?");
alert("Tu comida favorita es " + favFood);

//Ejercicio alerta usuario > edad >
let edadIngresada = prompt("Ingresá tu edad");

//if común
/*
if(edadIngresada >= 18){
    alert("Su edad es de: " + edadIngresada + " años. Usted es mayor de edad.");
} else {
    alert("Usted tiene " + edadIngresada + " años y es menor de edad.")
};
*/

//if elseif

if (edadIngresada >= 18) {
    alert("Su edad es de: " + edadIngresada + " años. Usted es mayor de edad.");
} else if (0 < edadIngresada && edadIngresada  < 18) {
    alert("Usted tiene " + edadIngresada + " años y es menor de edad.")
} else if(edadIngresada<= 0){ //esta condición yo, Connie, no la hubiera puesto
    alert("La edad ingresada debe ser mayor a 0.")
} else {
    alert("La edad ingresa es inválida. Solo números mayores a 0.")
};



