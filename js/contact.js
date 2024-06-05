//Evento submit
let miFormulario = document.getElementById('formulario');
const nombreForm = document.getElementById('nombreForm');
const edadForm = document.getElementById('edadForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');

mainContact.appendChild(divContact);


// miFormulario.addEventListener('submit',validarFormulario);

// function validarFormulario(e) {
//     e.preventDefault(); 
//     console.log("Formulario enviado")
// }
//Lo que propiamente hace el botón submit es recargar la página
//Si saco la e y ese preventDefault, cuando aprieto Submit, RECARGA LA PÁGINA. Lo que me genera esto es EVITAR el evento SUBMIT por defecto (recargar la página) -> Lo que hace es que no recargue, pero se envía igual.
//En una página normal, sí queremos que recargue la pag. xq se manda y se borra, pero acá no nos sirve porq perdemos la data

//Quiero que me muestre la info en el cuerpo de la página:
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Así no me recarga y puedo ver.
    divContact.appendChild(textContact);
    textContact.innerHTML = `El nombre ingresado es ${nombreForm.value}. La edad ingresada es ${edadForm.value}`;
});



