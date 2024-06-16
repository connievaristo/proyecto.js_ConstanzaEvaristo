/* Clase 11:
//localStorage
localStorage.setItem("string", "Hola Connie");
localStorage.setItem("Numbers", 1230);
localStorage.setItem("Booleano", true);
localStorage.setItem("Array", [1, 2, 3, 4]);

//Recuperar valor de la clave
let stringLocal = localStorage.getItem("string");
console.log(stringLocal); //Hola Connie

//sessionStorage
sessionStorage.setItem("stringS", "Bai");
sessionStorage.setItem("NumberS", 1808);
sessionStorage.setItem("Boolean", false);
sessionStorage.setItem("ArrayS", [5, 6, 7, 8]);

//ver valor
console.log(sessionStorage.getItem("ArrayS")); //5,6,7,8
// console.log(typeof "Arrays"); //Muestra tipo de dato. Es string, siempre String para esto

//Eliminar elementos del Storage
localStorage.removeItem("Array");

for (let i = 0; i < localStorage.length; i++) { //con el lenght recorrés
    let clave = localStorage.key(i); //cuando vale 1 toma string, cuando vale 2 numbers, 3 booleano y 4 array
    console.log("Clave: " + clave + " | Valor: " + localStorage.getItem(clave));
}
/*
Clave: Booleano | Valor: true
Clave: string | Valor: Hola Connie
Clave: Numbers | Valor: 1230

//JSON
const producto = {
    id: 1,
    nombre: "Azúcar",
    precio: 1000
};

//localStorage.setItem("producto",producto); //pasé el objeto como value. te lo muestra así: [object Object]

//Transformo a JSON (txt plano)
const productoJSON = JSON.stringify(producto);
console.log(producto);
console.log(productoJSON); //{"id":1,"nombre":"Azúcar","precio":1000}

localStorage.setItem("Producto", productoJSON);

const productoOBJECT = JSON.parse(productoJSON);
console.log(productoOBJECT); //vuelve a ser Objeto
console.log(productoOBJECT.id);

const productoRecoveredFromLocal = JSON.parse(localStorage.getItem("Producto")); //recupero de una
console.log(productoRecoveredFromLocal);

*/

/*
const productos = [
    {
        id: 1,
        nombre: "Azúcar",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Yerba",
        precio: 1600
    },
    {
        id: 3,
        nombre: "Dulce de leche",
        precio: 2800
    }
]

const guardarEnLocalStorage = (key, value ) => {localStorage.setItem(key,value)};

//Almacenamos producto por producto
// for (const producto of productos){
//     guardarEnLocalStorage(producto.id,JSON.stringify(producto)) //key: id - value: el objeto completo
// };

guardarEnLocalStorage("productos",JSON.stringify(productos));

console.log(JSON.parse(localStorage.getItem("productos"))); //Recupero
*/
localStorage.clear();

//Actividad en clase: Crear CARRITO DE COMPRAS completo

const products = [
    { id: 1, nombre: "Azúcar", precio: 1000 },
    { id: 2, nombre: "Yerba", precio: 1700 },
    { id: 3, nombre: "Dulce de Leche", precio: 2800 },
    { id: 4, nombre: "Manteca", precio: 980 },
    { id: 5, nombre: "Azúcar impalpable", precio: 1200 },
    { id: 1, nombre: "Café", precio: 4000 },
];

let cart = localCartFromLocalStorage();

function addToCart(productId, cantidad) {
    const product = products.find(p => p.id === productId) //le digo que me recupere todos los Id siempre y cuando coincida con el que paso por parámetro
    if (!product) {
        console.error("El producto no fue encontrado");
        return; //return para que salga de la función
    }

    const cartItem = cart.find(item => item.id = productId);

    if (cartItem) { //si está el item
        cartItem.cantidad += cantidad; //al item que ya existe, le incremento la cant que paso x parametro
        cartItem.subTotal = cartItem.cantidad * cartItem.precio;
    } else { //Si el producto no existe, lo creo y sumo al carrito:
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: cantidad,
            subTotal: cantidad * product.precio
        })
    }

    saveCartToLocalStorage();
    renderCart();
};

function renderProductos() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; //lo limpio?
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <p>${product.nombre} - $${product.precio}</p>
        <button onclick="addToCart(${product.id},1)">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    })
};

function renderCart(){
    const cartDiv = document.getElementById('div');
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv = `
        <p></p>`
    })
}

//DOMCoantedLoad: espera a q se cargue la página?