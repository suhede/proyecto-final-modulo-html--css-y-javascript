 document.addEventListener("DOMContentLoaded", function () {
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

  




 })
    
    



 