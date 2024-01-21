document.addEventListener("DOMContentLoaded", function () {
  // ------PRIMER EVENTO (section inicio)-------
  const carrusel = document.querySelector(".inicio__carrusel");
  const punto = document.querySelectorAll(".punto");
  // cuando hago click en punto, indica la posicion del punto
  // aplicar un transform translateX al div carrusel,
  // quitar la clase activo de todos los puntos, y se
  // añade la clase activo al punto que hemos hecho click
  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
      // guarda la posicion de ese punto
      let posicion = i;
      // si la posicion es 0 el tranformX es 0
      //cuando la posicion es 1 el transform es -25%
      // es decir el espacio que debe desplazarse el carrusel
      let operacion = posicion * -25;
      carrusel.style.transform = `translateX(${operacion}%)`;
      //Recorremos todos los puntos para quitar y añadir la clase activo
      punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove("activo");
      });
      punto[i].classList.add("activo");
    });
  });

   // -----------EVENTO VALIDACION FORMULARIO-----------------------
  
// Se crea una función y dentro de esta se declaran variables que se usaran para validar el formulario,
//en este caso se llamo por ID los inputs.
function prepararCorreo() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  // Crear el enlace "mailto" con los valores del formulario
  let enlaceMailto = "mailto:?subject=Asunto del Correo&body=" +
                     encodeURIComponent("Nombre: " + nombre + "\nCorreo electrónico: " + email + "\n\nMensaje: " + mensaje);

  // Abrir la aplicación de correo predeterminada de Windows
  window.location.href = enlaceMailto;
}


});
