// Script para los ejemplos de eventos click, focus y mouseover

// Ejemplo 1: Cambiar el color de fondo de un div al hacer clic
let click1 = document.getElementById("click1");
let box = click1.querySelector(".box");
box.addEventListener("click", function() {
  // Generar un color aleatorio en formato rgb
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  // Asignar el color al fondo del div
  box.style.backgroundColor = color;
});

// Ejemplo 2: Mostrar u ocultar un mensaje al hacer clic en un botón
let click2 = document.getElementById("click2");
let button = click2.querySelector("button");
let message = click2.querySelector(".message");
button.addEventListener("click", function() {
  // Si el mensaje está oculto, mostrarlo y cambiar el texto del botón
  if (message.style.display === "none") {
    message.style.display = "block";
    button.textContent = "Ocultar";
  } else {
    // Si el mensaje está visible, ocultarlo y cambiar el texto del botón
    message.style.display = "none";
    button.textContent = "Mostrar";
  }
});

// Ejemplo 3: Sumar o restar un contador al hacer clic en unos botones
let click3 = document.getElementById("click3");
let plus = click3.querySelector("#plus");
let minus = click3.querySelector("#minus");
let counter = click3.querySelector("#counter");
let count = 0; // Variable para guardar el valor del contador
plus.addEventListener("click", function() {
  // Incrementar el contador en uno y mostrarlo en el párrafo
  count++;
  counter.textContent = count;
});
minus.addEventListener("click", function() {
  // Decrementar el contador en uno y mostrarlo en el párrafo
  count--;
  counter.textContent = count;
});

// Ejemplo 1: Cambiar el borde de un input al recibir y perder el foco
let focus1 = document.getElementById("focus1");
let input = focus1.querySelector("input");
input.addEventListener("focus", function() {
  // Cambiar el borde a verde al recibir el foco
  input.style.borderColor = "black";
});
input.addEventListener("blur", function() {
  // Cambiar el borde a gris al perder el foco
  input.style.borderColor = "blue";
});

// Ejemplo 2: Validar el contenido de un input al perder el foco
let focus2 = document.getElementById("focus2");
let email = focus2.querySelector("input");
let error = focus2.querySelector(".error");
email.addEventListener("blur", function() {
  // Obtener el valor del input
  let value = email.value;
  // Crear una expresión regular para validar el formato de un email
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  // Si el valor no coincide con la expresión regular, mostrar el mensaje de error
  if (!regex.test(value)) {
    error.style.display = "block";
  } else {
    // Si el valor coincide con la expresión regular, ocultar el mensaje de error
    error.style.display = "none";
  }
});

// Ejemplo 3: Mostrar una sugerencia al recibir el foco y ocultarla al perderlo
let focus3 = document.getElementById("focus3");
let password = focus3.querySelector("input");
let hint = focus3.querySelector(".hint");
password.addEventListener("focus", function() {
  // Mostrar el mensaje de sugerencia al recibir el foco
  hint.style.display = "block";
});
password.addEventListener("blur", function() {
  // Ocultar el mensaje de sugerencia al perder el foco
  hint.style.display = "none";
});
