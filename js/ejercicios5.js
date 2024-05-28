const persona = {
    nombre: "Connie",
    edad: 25,
    ciudad: "Buenos Aires"
};

console.log(persona.nombre);

//Agregar telefono a persona:
persona.telefono = "1111111111";
console.log(persona);

const coche = {
    marca: "Volkswagen",
    modelo: "Gol Trend",
    year: "2016"
};
console.log(coche.modelo);

coche.color = "gris";
console.log(coche);

//Constructor Producto
function Producto(nombre,precio,cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
};

const arroz = new Producto ("Arroz",200,25);
console.log(arroz);

function Libro(titulo,autor,año){
    this.titulo=titulo;
    this.autor=autor;
    this.año=año;
};

const sherlock = new Libro("Sherlock Holmes","Arthur Conan Doyle",1887);
console.log(sherlock);

//Uso de THIS
function Rectangulo(base,altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = function(){ //método
        return this.base*this.altura;
    }
};

const figuraUno = new Rectangulo(2,3);
console.log(figuraUno.calcularArea());

function Estudiante(nombre,edad,curso){
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.presentarse = function(){
        console.log("Hola, mi nombre es " + this.nombre);
    };
};

const cacho = new Estudiante("Caio",2,"Mañana");
cacho.presentarse();

//Cuenta bancaria con función de DEPÓSITO
const cuentaBancaria = {
    saldo: 10000,
    titular: "Connie",
    depositar: function (deposito){
        return this.saldo += deposito;
    }
};

cuentaBancaria.depositar(5000);
console.log(cuentaBancaria.saldo); //15000
//Agregar método
cuentaBancaria.retirar = function (monto){
    return this.saldo -= monto;
}

cuentaBancaria.retirar(2000);
console.log(cuentaBancaria.saldo); //13000

//In y For...In
const frutas = {
    manzana: "Apple",
    pera: "Pear",
    naranja: "Orange"
};
//Uso IN
console.log("manzana" in frutas); //devuelve TRUE. se refiere al nombre de la KEY, no al value.

//Uso FOR...IN
for (const fruta in frutas){
    console.log(frutas[fruta]) //devuelve manzana, pera, naranja
};

//Clases y Métodos
const PI = 3.14

class Circulo{
    constructor(radio){
        this.radio = radio;
    }
    calcularPerimetro = function (){
        return 2*PI*this.radio;
    }
};

const circulo1 = new Circulo(30);
console.log(circulo1.calcularPerimetro());

class Empleado{
    constructor(nombre,edad,cargo){
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
    }
    promocionar(newCargo){
        this.cargo = newCargo;
    }
};

const chucho = new Empleado("Chucho",3,"Prince");
chucho.promocionar("King");
console.log(chucho.cargo);






