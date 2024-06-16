//Las variables que ya están declaradas en navegación, las reconoce (tiene que estar antes en el HTML porque es en casacada)

const mainBody = document.querySelector('#main'); //agarré el id main, como es el getElementbyId, como es querySelector va con #
const boton = document.createElement('button');
boton.textContent = 'Click'; //que diga click
boton.type = 'button';
mainBody.appendChild(boton);
boton.style.backgroundColor='yellow'; //Estilos con DOM
boton.style.padding='1rem'; 
boton.style.width='6rem';
boton.style.margin='2rem';
boton.style.fontSize='1.2rem';
//Hasta acá: DOM

//Eventos

//1. .addEventListener('evento que quiero generar/capturar',funcionAsignada
//Quiero que me cambie el color cuando aprieto el botón

// function respuestaClick(){ 
//     boton.style.backgroundColor = 'blue';
//     boton.style.color = 'white';
// }

//.addEventListener con función flecha declarada dentro
// boton.addEventListener('click', () => {
//     // boton.style.backgroundColor='red';
//     // boton.style.color='white';
// })

//2. onclick quiere que le pases una función
boton.onclick = () => {
    alert("Botón apretado con onclick!")
};

//3. Sintaxis en el HTML (buscá el input)

//Más ejemplos:
boton.onclick = () => {
    cuerpo.classList.add('black'); //Mira en la consola el HTML para ver si aparece la clase
};

boton.addEventListener('mouseover',() => {
    boton.style.color = 'blue';
    boton.style.backgroundColor = 'yellow'
});

boton.addEventListener('mouseout', () => {
    boton.style.color = 'yellow';
    boton.style.backgroundColor = 'blue';
});

//Evento change
let input1 = document.getElementById('nombre');
let input2 = document.getElementById('edad');

input1.onchange = () => {console.log(input1.value)}; //Traigo el valor ingresado en el input
input2.onchange = () => {console.log(input2.value)};

//Elemento input
input1.addEventListener('input', () => {
    console.log(input1.value)
});

//Evento submit en contact.js

//Eventos del mouse
let inicioH1 = document.getElementById('inicioH1');
console.log(inicioH1.innerHTML); //Inicio

inicioH1.addEventListener('mouseover',() =>{ //se pone azul cuando te parás y hacés click
    inicioH1.style.color = 'blue';
});

inicioH1.addEventListener('mouseout', () => { //vuelve a negro cuando salís y hacés click
    inicioH1.style.color = 'black';
});

