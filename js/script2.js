console.log("Hola mundo");

//if común
/*
if(edadIngresada >= 18){
    alert("Su edad es de: " + edadIngresada + " años. Usted es mayor de edad.");
} else {
    alert("Usted tiene " + edadIngresada + " años y es menor de edad.")
};
*/

//if elseif
/*
if (edadIngresada >= 18) {
    alert("Su edad es de: " + edadIngresada + " años. Usted es mayor de edad.");
} else if (0 < edadIngresada && edadIngresada  < 18) {
    alert("Usted tiene " + edadIngresada + " años y es menor de edad.")
} else if(edadIngresada<= 0){ //esta condición yo, Connie, no la hubiera puesto
    alert("La edad ingresada debe ser mayor a 0.")
} else {
    alert("La edad ingresa es inválida. Solo números mayores a 0.")
};
*/

//booleanos
const V = true;
const F = false;

//Tablas de verdad
console.log("Tablas de Verdad del operador && (y)");
console.log(V && V);
console.log(V && F);
console.log(F && V);
console.log(F && F);

console.log("Tablas de Verdad del operador || (o)");
console.log(V || V);
console.log(V || F);
console.log(F || V);
console.log(F || F);

console.log("Tablas de Verdad de la Negación !");
console.log(!V + " la negación de la verdad.");
console.log(!F + " la negación de la falsedad");

let ingreseNombre = prompt("Ingrese su nombre:");
let ingreseApellido = prompt("Ingrese su apellido:");
//const VACIO = "";

//if anidado
/*
if (ingreseNombre !== "" && ingreseApellido !== "") {
    let ingreseEdad = prompt("Ingrese su edad");
    if (ingreseEdad !== "") { //anidación, tenés q poner el else tmb. esto solo se ejecuta si la condición de arriba se cumple
        alert("Su nombre es " + ingreseNombre + ", su apellido es " + ingreseApellido + " y su edad es " + ingreseEdad)
    } else { //else del anidado
        alert("Su nombre es " + ingreseNombre + " y su apellido es " + ingreseApellido)
    }
} else {
    alert("Por favor ingrese sus datos")
};
*/

//mismo ejemplo con OR
if (ingreseNombre !== "" || ingreseApellido !== "") {
    let ingreseEdad = prompt("Ingrese su edad"); //Lo ponemos acá porque solo tiene q pedir la edad SI se cumple eso, está dentro del primer IF porque es de ESE if.
    if (ingreseEdad !== "") { 
        alert("Su nombre es " + ingreseNombre + ", su apellido es " + ingreseApellido + " y su edad es " + ingreseEdad)
    } else { 
        alert("Su nombre es " + ingreseNombre + " y su apellido es " + ingreseApellido)
    }
} else {
    alert("Por favor ingrese sus datos")
};

//Concepto de SCOPE: lo vimos con el ingreseEdad dentro del IF. Nace, vive y muere solo en ese IF, si lo llamás ahora no viene:
console.log(ingreseEdad); //te va a tirar error, porque es una variable LOCAL. su scope/alcance es LOCAL.