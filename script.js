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
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();

  // Obtener el valor actual de varias criptomonedas
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const criptoContainer = document.getElementById("cripto-container");
      const criptos = [
        { nombre: "Bitcoin (BTC)", precio: data.bitcoin.usd, id: "btc" },
        { nombre: "Ethereum (ETH)", precio: data.ethereum.usd, id: "eth" },
        { nombre: "Litecoin (LTC)", precio: data.litecoin.usd, id: "ltc" },
      ];

      criptos.forEach((cripto) => {
        const criptoCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${cripto.nombre}</h5>
                                <p id="${cripto.id}-price" class="card-text">$${cripto.precio}</p>
                            </div>
                        </div>
                    </div>
                `;
        criptoContainer.innerHTML += criptoCard;
      });
    })
    .catch((error) =>
      console.error("Error al obtener los precios de las criptomonedas:", error)
    );
});

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
