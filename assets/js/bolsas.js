document.addEventListener('DOMContentLoaded', () => {
    
    const baseDeDatos = [
        {
            id: 1,
                nombre: 'BOLSA REUTILIZABLE SIEMPRE LEAL',
                precio: 6000,
                imagen: 'assets/img/subli/bt1.png'
            },
            {
                id: 2,
                nombre: 'BOLSA REUTILIZABLE LLNM',
                precio: 5000,
                imagen: 'assets/img/subli/bt2.png'
            },
            {
                id: 3,
                nombre: 'BOLSA REUTILIZABLE BANDOLERA',
                precio: 5000,
                imagen: 'assets/img/subli/bt3.png'
            },
            {
                id: 4,
                nombre: 'BOLSA REUTILIZABLE NATURALEZA',
                precio: 6000,
                imagen: 'assets/img/subli/bt4.png'
            },
            {
                id: 5,
                nombre: 'BOLSA REUTILIZABLE REAL HASTA LA MUERTE',
                precio: 5000,
                imagen: 'assets/img/subli/bt5.png'
            },
            {
                id: 6,
                nombre: 'BOLSA REUTILIZABLE STREET POEM',
                precio: 5000,
                imagen: 'assets/img/subli/bt6.png'
            },
            {
                id: 7,
                nombre: 'BOLSA REUTILIZABLE NO SOY ROMANTICO',
                precio: 5000,
                imagen: 'assets/img/subli/bt7.png'
            },
            {
                id: 8,
                nombre: 'BOLSA REUTILIZABLE EN EL CASTILLO',
                precio: 6000,
                imagen: 'assets/img/subli/bt8.png'
            }
        ];
    

        let carrito = []; // Variable que almacena los productos agregados al carrito
        const divisa = 'CLP$'; // Símbolo de la divisa a mostrar en pesos chilenos
        const DOMitems = document.querySelector('#items'); // Elemento donde se renderizarán los productos
    
        // Función para renderizar los productos en la página
        function renderizarProductos() {
            baseDeDatos.forEach((info) => {
                const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-4', 'mb-3');
    
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
    
                const miNodoTitle = document.createElement('h5');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
    
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid');
                miNodoImagen.setAttribute('src', info.imagen);
    
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text');
                miNodoPrecio.textContent = `${info.precio.toLocaleString()} ${divisa}`; // Convertir el precio a formato de moneda y mostrar en pesos chilenos
    
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = 'Agregar al carrito';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', agregarAlCarrito);
    
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            });
        }
    
        // Función para agregar un producto al carrito
        function agregarAlCarrito(evento) {
            const productoId = evento.target.getAttribute('marcador'); // Obtener el ID del producto
            const productoSeleccionado = baseDeDatos.find(producto => producto.id === parseInt(productoId)); // Buscar el producto en la base de datos
    
            if (productoSeleccionado) { // Verificar si se encontró el producto
                carrito.push(productoSeleccionado); // Agregar el producto al carrito
                localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar el carrito en el almacenamiento local
                // No redirigir a la página del carrito
            } else {
                console.error('El producto seleccionado no existe en la base de datos.');
            }
        }
    
        renderizarProductos(); // Llamar a la función para renderizar los productos en la página
});
