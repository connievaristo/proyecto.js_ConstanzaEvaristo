//Objetos en JS
/*
let nombre = "Constanza";
let edad = 25;
let colorDeOjos = "Marrones";
let altura = 1.58;
let estadoCivil = "Soltera";
//todos tenemos estas condiciones => objeto
console.log(nombre);
*/

const connie = {
    //key: "value"
    nombre: "Connie", //atributos
    edad: 25,
    colorDeOjos: "Marrones",
    altura: 1.58,
    estadoCivil: "Soltera"
};
console.log(connie);

//Imprimir atributos:
console.log(connie.altura); //acceder a un objeto: objeto.atributo
console.log(connie["estadoCivil"]); //otra forma de acceder

//Modificar datos de un objeto:
connie.estadoCivil = "Casada";
console.log(connie.estadoCivil);

connie["altura"] = 1.59;
console.log(connie["altura"]);

//Constructores
/*
function Persona(nombre, edad, colorDeOjos, altura, estadoCivil){
    this.nombre = nombre; //el primer nombre es la VARIABLE del constructor y el nombre dsp del igual es el PARÁMETRO, q pasa a ser valor.
    this.edad = edad; //con el this los diferenciás, ahora está claro que esa es la key
    this.colorDeOjos = colorDeOjos;
    this.altura = altura;
    this.estadoCivil = estadoCivil;
};

const chucho = new Persona("Chucho",3,"Verdes",1.80,"Soltero"); //pongo new antes, porq es una nueva Persona!
console.log(chucho);

const cacho = new Persona("Cacho",2,"Ámbar",1.75,"Soltero   ");
console.log("Cachis: ", cacho);

*/
//Construcción LITERAL de un objeto
function PersonaLiteral(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.colorDeOjos = literal.colorDeOjos;
    this.altura = literal.altura;
    this.estadoCivil = literal.estadoCivil;
};

const chuchoLiteral = new PersonaLiteral({
    nombre: "Chucho",
    edad: 3,
    colorDeOjos: "Verdes",
    altura: 1.80,
    estadoCivil: "Soltero"
});

console.log("Chucho Literal: ", chuchoLiteral);

//Diferencia entre Función y Método
function hola() {
    return console.log("Hola");
};
//Método constructor: mirá PersonaLiteral

//La verdad detrás del String (y muchos más). Es un objeto al mismo tiempo
let nombre = new String("Hola");
console.log(nombre);
//pero estmaos acostumbrados a esto -q es más fácil-
let nombreBasico = "Hola";
console.log(nombreBasico);
console.log(nombreBasico.length); //.lenght es un MÉTODO de ese String. Al igual q todos los q te aparecen con el .
console.log(nombreBasico.toLocaleUpperCase());

function Persona(nombre, edad, colorDeOjos, altura, estadoCivil) {
    this.nombre = nombre;
    this.edad = edad;
    this.colorDeOjos = colorDeOjos;
    this.altura = altura;
    this.estadoCivil = estadoCivil;
    this.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre)
    };
};
//¿Cómo accedo a ese método de this.saludar?
const chucho = new Persona("Chucho", 3, "Verdes", 1.80, "Soltero");
console.log(chucho);
chucho.saludar();

//Operador IN y FOR ... IN
console.log(chucho.nombre);
//Usando IN
console.log("nombre" in chucho); //te va a devolver true q está dentro de chucho
console.log("apellido" in chucho); //da error porq no existe ese atributo

//Iterador FOR ... IN para recorrer un objeto
for (const algo in chucho) {
    console.log(chucho[algo])
}; //ese algo recorre todos los atributos q hay en chucho

//Clases

class Vehiculo {
    constructor(tipo, marca, condicion, color) { //acá paso los parámetros q quiera
        this.tipo = tipo.toUpperCase();
        this.marca = marca;
        this.condicion = condicion;
        this.color = color;
    };
    //creamos método dentro de la clase - no es necesario poner FUNCTION (en clases)
    enciende() {
        console.log("El vehículo " + this.tipo + " se ha encendido.");
    };
};

//Para construir un vehículo, hago una instancia de la clase
const auto = new Vehiculo("auto", "Volkswagen", "usado", "gris");
console.log(auto);

const lancha = new Vehiculo("lancha", "Philips", "Blanca", "nueva");
console.log(lancha);

//imprimir método de clase:
auto.enciende();

//Ponerle métodos dentro del constructor en una clase (mirá tipo.toUpperCase)

class Producto {
    constructor(nombre, descripcion, categoria, precio, stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    };
    agregarIva(){
        this.precio = this.precio*1.21;
    };
    vender(){
        console.log("El producto "+this.nombre+" fue vendido.");
    };
};

const producto1 = new Producto("Azúcar", "Azúcal refinada","Venta minorista",1099.90,100);
console.log(producto1);
producto1.agregarIva();
console.log(producto1);
producto1.vender();