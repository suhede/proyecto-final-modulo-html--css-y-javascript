document.addEventListener("DOMContentLoaded", function () {
  /* En principio mediante un script se maneja un evento que muestra y oculta un calendario,
     Se crea la variable disponibilidad, a esta variable se dice es igual al boton de html
     con el id = reserva__disponibilidad*/
  let disponibilidad = document.getElementById("reserva__disponibilidad");
  disponibilidad.addEventListener("click", prueba);
  /*Al boton disponibilidad se le añade un evento "click", que ejecutará
    la funcion prueba; una vez ejecutada se visualice el calendario */

  function prueba() {
    let calendarEl = document.getElementById("calendar");
    let infoContainer = document.getElementById("infoContainer");
    let tituloElement = document.getElementById("titulo");
    let nombreElement = document.getElementById("nombre");
    let telefonoElement = document.getElementById("telefono");
    let emailElement = document.getElementById("email");
    let comensalesElement = document.getElementById("comensales");
    let servicioElement = document.getElementById("servicio");
    let calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      initialView: "dayGridMonth",
      events: [
        {
          title: "Evento 1",
          start: "2024-01-20",
        },
        {
          title: "Evento 2",
          start: "2024-01-25",
        },
        /* Una vez aparece el calendario, se hace click en el día y saldrá un
              prompt preguntando datos para la reserva.*/
      ],
      dateClick: function (info) {
        let selectedDate = info.dateStr;
        let confirmation = confirm(
          "¿Quieres agregar información para el día " + selectedDate + "?"
        );
        // Se llenan las casillas para la recogida de información para la reserva.
        if (confirmation) {
          let nombreInput = prompt("Ingrese su nombre:");
          let telefonoInput = prompt("Ingrese su teléfono:");
          let emailInput = prompt("Email:");
          let comensalInput = prompt("Cuantos comensales:");
          let servicioInput = prompt("Comida o Cena:");

          // Luego se actualiza el contenido del div con la información recogida.
          tituloElement.textContent = "Informacion Recogida";
          nombreElement.textContent = "Nombre: " + nombreInput;
          telefonoElement.textContent = "Teléfono: " + telefonoInput;
          emailElement.textContent = "Email: " + emailInput;
          comensalesElement.textContent = "Comensales: " + comensalInput;
          servicioElement.textContent = "Servicio: " + servicioInput;

          // Se muestra el div con la información recogida debajo del calendario.
          infoContainer.style.display = "block";
        }
      },
      locale: "es",
    });
    calendar.render();
  }
});
