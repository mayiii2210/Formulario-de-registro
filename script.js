
// Obtener el formulario y el mensaje
var form = document.getElementById("form-registro");
var mensaje = document.getElementById("mensaje");

// Añadir un evento al enviar el formulario
form.addEventListener("submit", function(event) {
  
  // Evitar el envío por defecto
  event.preventDefault();

  // Obtener los valores de los campos
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmar = document.getElementById("confirmar").value;
  var terminos = document.getElementById("terminos").checked;

  // Validar los campos
  if (nombre == "" || email == "" || password == "" || confirmar == "" || !terminos) {
    // Mostrar un mensaje de error
    mensaje.textContent = "Por favor, rellena todos los campos y acepta los términos";
    mensaje.className = "error";
  } else if (password != confirmar) {
    // Mostrar un mensaje de error
    mensaje.textContent = "Las contraseñas no coinciden";
    mensaje.className = "error";
  } else {
    // Crear un objeto FormData con los datos del formulario
    var datos = new FormData(form);

    // Enviar los datos al servidor mediante la API Fetch
    fetch(form.action, {
      method: form.method,
      body: datos
    })
    .then(function(response) {
      // Comprobar si la respuesta es correcta
      if (response.ok) {
        // Mostrar un mensaje de éxito
        mensaje.textContent = "Registro completado con éxito";
        mensaje.className = "success";
      } else {
        // Mostrar un mensaje de error
        mensaje.textContent = "Ha ocurrido un error al enviar el formulario";
        mensaje.className = "error";
      }
    })
    .catch(function(error) {
      // Mostrar un mensaje de error
      mensaje.textContent = "Ha ocurrido un error al enviar el formulario";
      mensaje.className = "error";
    });
  }
});
