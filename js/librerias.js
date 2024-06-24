const boton = document.getElementById('boton');

// boton.addEventListener('click', () => {
//     alert("Me hicieron click");
// }); //Bastante feo así
/*
//con Sweet Alert, mirá doc
boton.addEventListener('click',() =>{
    // Swal.fire("Me hicieron click!");
    Swal.fire({
        title: "Me hicieron click",
        text: "Now what?",
        icon: "info", //existen: success, info, warning, question
        footer: '<a href="./index.html">Take me to Index</a>',
        imageUrl: "./img/logo.png",
        imageHeight: 200,
        imageAlt: "CoderHouse"
      });
});
*/

// boton.addEventListener('click', () => {
//     Swal.fire({
//         title: "Quiere finalizar la compra?",
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: "Aceptar",
//         denyButtonText: `No aceptar`
//     }).then((result) => { //Método que todavía no vimos!!!
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//             Swal.fire("Compra realizada!", "", "success");
//         } else if (result.isDenied) {
//             Swal.fire("Compra no realizada", "", "info");
//         }
//     });
// });


//Esto de abajo él lo agregaría cuando agregás al carrito
// boton.addEventListener('click', () => {
//     Swal.fire({
//         position: "top-end", //end: derecha, start: izquierda
//         icon: "success",
//         title: "Producto agregado al carrito",
//         showConfirmButton: false,
//         timer: 20500, //el tiempo que aparece en pantalla
//         timerProgressBar: true, //aparece la barrita para ver el tiempo de arriba
//     });
// });


//Toastify JS
// boton.addEventListener('click', () => {
// Toastify({
//     text: "El usuario está en línea",
//     duration: 3000
//     }).showToast();
// });

// boton.addEventListener('click', () => {
//     Toastify({
//         text: "El usuario está en línea",
//         className: "info",
//         // destination: "https://github.com/apvarun/toastify-js", //Clickeás y te llva a otra página
//         // newWindow: true,
//         onClick: function () {
//             Toastify({
//                 text: "Hiciste otro click!",
//                 duration: 3000
//             }).showToast();
//         },
//         close: true,
//         gravity: "bottom",
//         position: "left",
//         avatar: "./img/logo.png", //Aparece la fotito
//         offset: { //para mover dónde aparece (en px)
//             x: 150, 
//             y: 150
//           },
//         style: {
//             background: "linear-gradient(to right, #12000b, #96c93d)",
//         }
//     }).showToast();
// });

//AOS
