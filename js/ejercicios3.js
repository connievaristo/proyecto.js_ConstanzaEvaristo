//Control de flujo if & if else con Operadores Lógicos
/*
let firstNumber = prompt("Ingrese un número");
let secondNumber = prompt("Ingrese otro número");

if(firstNumber < secondNumber){
    console.log("El primer número ingresado, " + firstNumber + ", es menor que el segundo.");
} else if(firstNumber > secondNumber){
    console.log("El primer número ingresado, " + firstNumber + ", es mayor que el segundo.");
} else if(firstNumber==secondNumber){
    console.log("El primer número ingresado es igual al segundo.");
} else {
    alert("Valor inválido.");
};
*/
/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
};
*/
let numberUser = prompt("Ingrese un número menor a 5.");
let i = 0;

/*
while (i < numberUser) {
    console.log("Esto es el while, i vale: "+ i);
    i++; //Le tenés que decir que se incremente.
};

do{
    console.log("Esto es el do while, ahora i vale: " + i);
    i++
} while(i <= 10);
*/
/*
while (i % 2 == 0 && i <= 20) {
    for (i = 0; i <= 20; i++) {
        console.log(i);
        i++;
    };
};
*/

//mostrar nro ingresado por el usuario hasta 1
while(1 <= numberUser){
    console.log(numberUser);
    numberUser--;
};


//mostrar tabla del 5 (hasta 50) con un Do While
do {
    i++;
    if (i % 5 == 0) {
        console.log("Tabla del 5: " + i);
    } else { null };
} while (i < 50);