const cuerpo = document.body; //confirmar

const tituloH1 = document.getElementById('titulo');

// console.log(tituloH1); //h1#titulo
// console.log(tituloH1.innerText); //Hola mundo - .innerText = texto plano

const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores); //HTMLCollection(2) [div.contenedor, div.contenedor]
// console.log(contenedores[0]);
// console.log(contenedores[1]);

// console.log(contenedores[0].innerText);//contenedor 1
// console.log(contenedores[1].innerText); //contenedor 2 - Hola gente

const secciones = document.getElementsByTagName('section');
// console.log(secciones);
// console.log(secciones[0]);
// console.log(secciones[1]);
// console.log(secciones[0].innerText);
// console.log(secciones[1].innerHTML);

//Texto plano, nada más: innerText
//innerHTML te trae todo, te conviene este

//Para recorrer todo el contenedor:
for (const contenedor of contenedores) {
    console.log(contenedor.innerHTML)
}; /*
contenedor 1
contenedor 2
<h4>
    Hola gente
</h4>
*/

//Modificar HTML desde Js:
console.log(tituloH1.innerText); //Hola mundo
tituloH1.innerText = "Hola Coderhouse";
console.log(tituloH1.innerText); //Hola Coderhouse

contenedores[1].innerHTML = "<h5>Hola chiquisss<p>cómo va?</p></h5>";
console.log(contenedores[1].innerText);

contenedores[0].classList.add('clase_nueva');

const claseNueva = document.getElementsByClassName('clase_nueva'); //en el html ahora se llama así
claseNueva[0].style.color = 'red';

claseNueva[0].id = 'ramiro';

cuerpo.style.backgroundColor = '#ddd'; //grey, con #
//cuerpo.style.padding = '5rem';

//Creación de elementos
const articuloDiv = document.createElement('article');
articuloDiv.id = 'articulo'; //le asigno id
articuloDiv.classList.add('notas', 'texto');

//ahora lo agregás:
cuerpo.appendChild(articuloDiv); //Siempre se agrega AL FINAL, como el push

//Eliminar lo que creé
articuloDiv.remove();

//Esto sirve para el carrito:
document.getElementById('nombre').value = "Marcos";
document.getElementById('edad').value = 3;

//Crear barra de navegación - ver profe otra vez
const cabecera = document.getElementById('header'); //se refiere a la TAG <header></header> lo toma como coleccion, si no ponelee el del id
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Products", "Contact"];

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link}.html" >${link}</a>`
    ul.appendChild(li);
};

//Trabajamos con objetos: 
const productos = [{
    id: 1,
    nombre: "Agua",
    precio: 700
},
{
    id: 2,
    nombre: "Yerba",
    precio: 1500
},
{
    id: 3,
    nombre: "Azúcar",
    precio: 1400
},
{
    id: 4,
    nombre: "Fideos",
    precio: 800
}
];

const divProducto = document.createElement('div');
cuerpo.appendChild(divProducto);

//Como tengo muchos productos en el objeto, accedo a todos con un FOR!
for (const producto of productos) {
    let literal = `ID: ${producto.id} - Nombre: ${producto.nombre} | Precio $${producto.precio}.` //${} para acceder a las variables, propiedades, etc.
    const textoH4 = document.createElement('h4');
    textoH4.innerHTML = literal; //guardé el texto en la etiqueta h4, si no no me lo muestra
    divProducto.appendChild(textoH4); //lo meto dentro de ese div
};

//Query Selector: captar elementos/etiquetas/ids de nuestr apagina.
let parrafo = document.querySelector('#articulo_ p');
console.log(parrafo); //<p class="parrafo_">holisss</p>

let divParrafo = document.querySelector('#articulo_'); //EL PADRE
console.log(divParrafo);/*
<section id="articulo_">
<p class="parrafo_">holisss</p>
</section>
*/
let parrafoPorClase = document.querySelector('.parrafo_'); //lo mismo q art_ p
console.log(parrafoPorClase); //<p class="parrafo_">holisss</p>

let contenedorConQuery = document.querySelectorAll('.contenedor'); //trae TODOS
console.log(contenedorConQuery); //odeList(2) [div#ramiro.contenedor.clase_nueva, div.contenedor]
