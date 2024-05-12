/*
lo que hace el FOR en forma larga:

let a;
a = 0;
console.log(a);

a = a + 1;
console.log(a);

a = a + 1;
console.log(a);

a = a + 1;
console.log(a);
*/

/* Usamos FOR
for (let i = 0; i < 10; i++) { // i = i + 1 es lo mismo que i++
    console.log(i)
};
*/
/*
primer vuelta:
i = 0
console.log(i) = 0

segunda vuelta:
i = 1 // (0 + 1)
console.log(i) = 1

tercera vuelta:
i = 2 //se reasigno, xq sumo 1 a 1!
console.log(i) = 2
...

novena vuelta:
i = 9
console.log(i) = 9
*/

/*
for (let i = 1; i <= 10; i++) {
    console.log(i)
};
*/

/* BREAK y CONTINUE
let ingreseSuNombre = prompt("Ingrese su nombre");

 Usando break
for (let i = 0; i < 15; i++) {
    if(i == 5){ //esto trabaja dentro del ciclo for, lo q hace es q si i es igual a 5, va a dejar de iterar por el BREAK
        break;
    }
    console.log("El nombre ingresado es " + ingreseSuNombre + i);  
};
*/

/* Usando continue
for (let i = 0; i < 10; i++) {
    if(i == 5){ 
        continue;
    }
    console.log("El nombre ingresado es " + ingreseSuNombre + i);  
};
*/

//Métodos (aparecen después del .)
/*
let nombre = "Connie";
//console.log(nombre.length); //te aparece 6 en la consola, xq Connie tiene 6 letras.

 for(let i = 0; i < nombre.length;i++){ //Inicializa en 0 porque el 0 lo cuenta como valor, si pusiera 1, tomaría como que Connie tiene 5 letras y tiene 6 (itera la cantidad de letras que tiene el nombre este for)
     console.log("Su nombre es " + nombre + ". Iteración Nro. " + i);
 };
 */

//Ciclo  WHILE
/*
let i = 0; //es global, acà vale 0 la i
while(i<5){
    console.log("Imprimiendo desde el while " + i);
    i++
}; //en este while llega a valer 4 y entra en el do while

do{ //acá llegar a valer 7 y aparece dos veces màs 
    console.log("Imprimiendo desde el do while " + i);
    i++
} while(i<=7);
*/

/*
let a = 1; //number
let b = "1"; //string

let suma = a + b;
console.log(parseInt(suma)); //se concatena xq hay un string, tengo q pasarlo a nro:

let sumaParseada = parseInt(a) + parseInt(b);
console.log(sumaParseada);

let ingreseNroA = prompt("Ingrese un nro.");  //puedo poner el parseInt acá tmb
let ingreseNroB = prompt("Ingrese otro nro.");
let resultado = parseInt(ingreseNroA) + parseInt(ingreseNroB); //lo tengo que transformar a number xq el prompt te trae todo como string
let resultadoFloat = parseFloat(ingreseNroA) + parseFloat(ingreseNroB);
console.log(resultado);
console.log(resultadoFloat);
*/

// Switch
/*Vamos a usar el ejemplo del ejercicio de si es menor o mayor de edad, porque el switch está bueno cuando hay muchos ELSEIF

este es el ejemplo:
if (edadIngresada >= 18) {
    alert("Su edad es de: " + edadIngresada + " años. Usted es mayor de edad.");
} else if (0 < edadIngresada && edadIngresada  < 18) {
    alert("Usted tiene " + edadIngresada + " años y es menor de edad.")
} else if(edadIngresada<= 0){ //esta condición yo, Connie, no la hubiera puesto
    alert("La edad ingresada debe ser mayor a 0.")
} else {
    alert("La edad ingresa es inválida. Solo números mayores a 0.")
};

NO SE PUEDE HACER CON SWITCH (o sea sería muy largo) PORQUE TENGO QUE PONER CASO POR CASO por cada nro., O SEA DEL 1 AL 18 UN CASE PARA CADA UNO Y DEFAULT ES MAYOR DE EDAD!!!
O sea no se puede poner con condiciones q no sean "exactas", o sea digo caso 18 y ES 18 literal lo q ingresé, xq eso reemplaza la variable

let edadIngresada = parseInt(prompt("Indicá tu edad"));

switch (edadIngresada) { //el case reemplaza los else if
    case 18:
        console.log("Su edad es de: " + edadIngresada + " años. Usted es mayor de edad.");
        break;
    case 17:
        console.log("Usted tiene " + edadIngresada + " años y es menor de edad.");
        break;
    case 0:
        console.log("La edad ingresada debe ser mayor a 0.");
        break;
    default:
        console.log("La edad ingresa es inválida. Solo números mayores a 0.");
        break;
};

*/


/*
let numero = parseInt(prompt("Ingrese un número"));

switch(numero) {
    case 1:
    console.log("El número es 1");
    break;
    case 2:
    console.log("El número es igual a 2");
    break;
    default:
        console.log("El número no es ni uno ni dos.");
        break;
}
*/

//while y switch
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "Connie":
            alert("Hola C");
            break;
        case "Chucho":
            alert("Hola Ch");
            break;
       default:
           alert("¿Who are you?")
           break;
   } //Termina el switch
   entrada = prompt("Ingresar un nombre"); //esto el del while, si no ponés ESC va a seguir corriendo.
};

