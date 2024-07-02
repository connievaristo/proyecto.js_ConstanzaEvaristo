//  
const lista = document.getElementById('listado');


fetch("https://jsonplaceholder.typicode.com/posts/") //traigo info por API a mi pag
    .then((response) => response.json())
    .then(data => {
        data.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `
        <h3>${element.id}</h3>
        <h4>${element.title}</h4>
        <p>${element.body}</p>
        `
            lista.appendChild(li);
        });
    });

//Enviar información
fetch("https://jsonplaceholder.typicode.com/posts/",
    {
        method: 'POST',
        body: JSON.stringify({
            title: "Nuevo objeto",
            body: "Posteo de prueba",
            userId: 1
        }
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' //SIEMPRE así el content-type, con app/json, el charset es opcional.
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
;

    fetch("https://jsonplaceholder.typicode.com/posts/",
        {
            method: 'PUT',
            body: JSON.stringify({
                title: "Nuevo objeto",
                body: "Posteo de prueba",
                userId: 1
            }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8' //SIEMPRE así el content-type, con app/json, el charset es opcional.
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/",
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8' //SIEMPRE así el content-type, con app/json, el charset es opcional.
                }
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
;
//Cuando das la ruta así es ruta absoluta

//Rutas relativas
const cards = document.getElementById("cards");

const peticionA = async () => {
    const respuestaA = await fetch('/productos.json');
    const datos = await respuestaA.json();
    const data = await datos;
    for (item of data){
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card" style="width: 18rem; height: 32rem">
        <img class="card-img-top" src=${item.imagen} alt=${item.nombre}>
        <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">Descripción: ${item.descripcion}</p>
        <p class="card-text">Precio: ${item.precio}</p>
        <p class="card-text">Stock: ${item.stock}</p>
        <a href="#" class="btn btn-success">Comprar</a>
        </div>
        </div>
        `
        cards.appendChild(card);
    };
};