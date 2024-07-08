console.log("Función sincrónica 1"); //aparece primero esto

//aparece tercera esta:
setTimeout(() => { //tarda 5segs en aparecer
    console.log("Función asincrónica 1")}, //función callback
    5000); //tiempo en milisegundos. aunque le pongas 0, apareceria tercero

console.log("Función sincrónica 2"); //aparece segundo esto

//Ej. que vuelva a modo claro dsp de cierto tiempo -> ver navegacion.js

//setInterval: pones un intervalo
// setInterval(() => {
//     console.log("Función asincrónica 2")
// }, 100);

//clearInterval: para frenar el setInterval


//clearTimeout: para frenarlo, para anular el setTimeOut
console.log("Iniciar");

const fin = setTimeout(() => {
    console.log("Final")
}, 2000);

clearTimeout(fin); //no deja que se ejecute


//Promesas
const eventoAFuturo = (pasarNivel) => {
    return new Promise ((resolve, reject) => {
        pasarNivel ? resolve("RES fulfilled") : reject("RES rejected")
        });
    };

console.log(eventoAFuturo(true)); //Promise {<fulfilled>: 'Promesa fulfilled'}
console.log(eventoAFuturo(false)); //Promise {<rejected>: 'Promesa rejected'}

//then y catch
eventoAFuturo(true)
.then((respuesta) => {
    console.log(respuesta, "pasó al nivel 2"); //si paso true, veo esto en console log: "RES fulfilled"
})
.catch((error) => {
    console.error(error);
})
.finally(() => { //Se ejecuta siempre
    console.warn("Chauuu true");
})

eventoAFuturo(false)
.then((respuesta) => {
    console.log(respuesta); 
})
.catch((error) => {
    console.error(error);//si paso false, veo esto en console log: "RES rejected"
})
.finally(() => { //Se ejecuta siempre - Ojo para usarlo
    console.warn("Chauuu false");
})