document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
                nombre: 'FUNDA PROTECTORA ANUEL',
                precio: 5990,
                imagen: 'assets/img/subli/BRR2.PNG'
            },
            {
                id: 2,
                nombre: 'FUNDA PROTECTORA LAS LEYENDAS NUNCA MUEREN',
                precio: 4990,
                imagen: 'assets/img/subli/BRR3.PNG'
            },
            {
                id: 3,
                nombre: 'FUNDA PROTECTORA SIEMPRE LEAL',
                precio: 5990,
                imagen: 'assets/img/subli/BRR4.PNG'
            },
            {
                id: 4,
                nombre: 'FUNDA PROTECTORA LLNM2',
                precio: 6990,
                imagen: 'assets/img/subli/BRR5.PNG'
            },
            {
                id: 5,
                nombre: 'FUNDA PROTECTORA REAL HASTA LA MUERTE',
                precio: 5990,
                imagen: 'assets/img/subli/BRR6.PNG'
            },
            {
                id: 6,
                nombre: 'FUNDA PROTECTORA COLO-COLO ESCUDO',
                precio: 5990,
                imagen: 'assets/img/subli/COLOCOLO1.PNG'
            },
            {
                id: 7,
                nombre: 'FUNDA PROTECTORA COLO-COLO NEGRA',
                precio: 5990,
                imagen: 'assets/img/subli/COLOCOLO2.PNG'
            },
            {
                id: 8,
                nombre: 'FUNDA PROTECTORA COLO-COLO BLANCA',
                precio: 6990,
                imagen: 'assets/img/subli/COLOCOLO3.PNG'
            },
            {
                id: 9,
                nombre: 'FUNDA PROTECTORA COLO-COLO SANGRE ARAUCANA',
                precio: 5990,
                imagen: 'assets/img/subli/COLOCOLO4.PNG'
            },
            {
                id: 10,
                nombre: 'FUNDA PROTECTORA COLO-COLO ETERNO CAMPEON',
                precio: 5990,
                imagen: 'assets/img/subli/COLOCOLO5.PNG'
            }
        ];
    
        let carrito = []; // Variable que almacena los productos agregados al carrito
        const divisa = '$'; // Símbolo de la divisa a mostrar
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
                miNodoPrecio.textContent = `${info.precio}${divisa}`;
    
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
