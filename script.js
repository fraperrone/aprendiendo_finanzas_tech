// Lista de productos disponibles
let productos = [
  { nombre: "Remera 1", precio: 20 },
  { nombre: "Remera 2", precio: 25 },
  { nombre: "Taza 1", precio: 15 },
  { nombre: "Taza 2", precio: 18 },
];

// Función para mostrar productos en la consola
function mostrarProductos() {
  console.log("Lista de productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    console.log(
      `Producto: ${productos[i].nombre}, Precio: $${productos[i].precio}`
    );
  }
}

// Ejecutar mostrarProductos() al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);

// Función para validar el formulario de contacto
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
      console.log("Todos los campos están completos.");
    } else {
      console.log("Por favor, completa todos los campos.");
      event.preventDefault(); // Evita el envío del formulario si faltan campos
    }
  });
