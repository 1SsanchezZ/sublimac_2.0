document.addEventListener('DOMContentLoaded', () => {
    const divisa = '$'; // Definir la variable divisa
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; //La API que se utiliza en este código es la API de Local Storage.

    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    let contador = 0; // Contador para el número de productos en el carrito

// Función para mostrar los productos en el carrito
function mostrarProductosCarrito() {
    listaCarrito.innerHTML = ''; // Limpiar la lista antes de agregar los productos
    
    carrito.forEach((producto, index) => {
        if (producto) { // Verificar si el producto existe
            const cantidad = producto.cantidad !== undefined ? `Cantidad: ${producto.cantidad}` : ''; // Verificar si la cantidad está definida
            const productoHTML = `
                <div class="producto-carrito">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
                    <div class="detalle-producto">
                        <h3 class="nombre-producto">${producto.nombre}</h3>
                        <p class="precio-producto">${producto.precio}${divisa}</p>
                        ${cantidad} <!-- Mostrar la cantidad solo si está definida -->
                    </div>
                    <button class="btn-eliminar-producto btn btn-danger" data-indice="${index}">Eliminar</button>
                </div>
            `;
            listaCarrito.innerHTML += productoHTML;
        }
    });
}
    mostrarProductosCarrito(); // Mostrar los productos en el carrito al cargar la página

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        const index = carrito.findIndex(item => item.id === producto.id);
        if (index !== -1) {
            carrito[index].cantidad++;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }
        contador++;
        contadorCarrito.innerText = contador;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarProductosCarrito(); // Actualizar la visualización del carrito
    }

    // Función para eliminar un producto del carrito
    function eliminarProductoDelCarrito(indice) {
        carrito.splice(indice, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarProductosCarrito(); // Actualizar la visualización del carrito
    }

    // Agregar evento de clic a los botones "Agregar al carrito"
    const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
    botonesAgregarCarrito.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const productoId = parseInt(event.target.getAttribute('marcador'));
            const productoSeleccionado = baseDeDatos.find(producto => producto.id === productoId);
            agregarProductoAlCarrito(productoSeleccionado);
        });
    });

    // Agregar evento de clic a los botones "Eliminar"
    listaCarrito.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-eliminar-producto')) {
            const indice = parseInt(event.target.getAttribute('data-indice'));
            eliminarProductoDelCarrito(indice);
        }
    });
});
