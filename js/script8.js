const PI = Math.PI;
console.log(PI); //3.141592653589793

const E = Math.E;
console.log(E);//2.718281828459045

console.log(Math.max(12, 5, -89, 55, 787, 1));
console.log(Math.min(98, 45, 4, 67, 5, -85, 1));
//existe el infinito, es Infinity:
console.log(Math.max(1000, 5888, Infinity));


//Métodos de REDONDEO
//CEIL: Redondea siempre al más grande, para arriba
console.log(Math.ceil(PI));//4
console.log(Math.ceil(E));//3
console.log(Math.ceil(-9.0057));//-9

//FLOOR: Redondea siempre para abajo.
console.log(Math.floor(PI));//3
console.log(Math.floor(E));//2
console.log(Math.floor(-9.0057));//-10

//ROUND: Redondea al más cercano.
console.log(Math.round(PI));//3
console.log(Math.round(E));//3
console.log(Math.round(-9.0057));//-9

//RANDOM
console.log(Math.random()); //Genera un nro random, al azar

console.log(Math.random() * 100);//Genera un nro entre 0 y 100

console.log(Math.random() * 20 + 10); //Genera un nro random entre 10 y 30

const gen = () => {
    return console.log(Math.round(Math.random() * 100))
};

gen();

//SQUARE ROOT (Raíz cuadrada)
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(-81));//NaN

//POW (Potencia): base, exponencial
console.log(Math.pow(9, 2)); //9^2 = 81

//raíces no cuadradas:
console.log(Math.pow(27, 1 / 3));//3

function raizCubica(numero) {
    if (numero < 0) {
        return console.log(Math.pow(Math.abs(numero)))
    } else {
        return console.log(Math.pow(numero, 1 / 3))
    }
};
raizCubica(27);

//DATE

console.log(new Date()); //te da el día y hora de HOY: Tue May 28 2024 20:12:04 GMT-0300 (hora estándar de Argentina)

//Método Constructor

//Pasar fecha en particular
console.log(new Date(1998, 7, 18)); //Tue Aug 18 1998 00:00:00 GMT-0300
//Pasar hora tmb
console.log(new Date(2024, 3, 21, 15, 12, 11)); //Sun Apr 21 2024 15:12:11

console.log(new Date("December 24, 2023 23:59:00")); //Sun Dec 24 2023 23:59:00 GMT-0300

const HOY = new Date; //los meses van de 0 a 11 - eso es 28/05/2024
console.log(HOY.getFullYear());//2024
console.log(HOY.getMonth());//4 = Mayo
console.log(HOY.getDay()); //2 = Martes

console.log(HOY.toDateString()); //lo muestra así Tue May 28 2024
console.log(HOY.toLocaleString()); //28/5/2024, 12:00:00 a.m.
//solo la hora en nuestro formato:
console.log(HOY.toLocaleDateString()); //28/5/2024
//solo la hora:
console.log(HOY.toTimeString());//20:33:41

//Diferencias entre fechas
const NAVIDAD = new Date(2024, 11, 25);
console.log(NAVIDAD);

const DIFERENCIA = NAVIDAD - HOY;
console.log(DIFERENCIA); //18156271280 milisegundos

//Diferencia en segundos
const MILISEGUNDOS_DIA = 60 * 60 * 24 * 1000;
console.log(MILISEGUNDOS_DIA);

const DIFERENCIAS_EN_DIAS = (NAVIDAD - HOY) / MILISEGUNDOS_DIA;
console.log("Faltan " + Math.ceil(DIFERENCIAS_EN_DIAS) + " días para Navidad"); //faltan 210 días para navidad


//Calcular tiempo de ejecución de un programa
/*
const INICIO = new Date();
for(let i=0;i<100;i++){
    console.log("Un programa ejecutándose!")
};
const FINAL = new Date();

console.log("El proceso tardó " + (FINAL - INICIO) + " de milisegundos."); //tardó 5 milisegundos
*/