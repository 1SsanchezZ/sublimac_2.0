document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'POLERA UNISEX REAL HASTA LA MUERTE BLANCA',
            precio: 12990,
            imagen: 'assets/img/subli/REALHASTALAMUERTE1.png'
        },
        {
            id: 2,
            nombre: 'POLERA UNISEX REAL HASTA LA MUERTE ROSADA',
            precio: 12990,
            imagen: 'assets/img/subli/REALHASTALAMUERTE2.png'
        },
        {
            id: 3,
            nombre: 'POLERA UNISEX REAL HASTA LA MUERTE AMARILLA',
            precio: 12990,
            imagen: 'assets/img/subli/REALHASTALAMUERTE3.png'
        },
        {
            id: 4,
            nombre: 'POLERA UNISEX REAL HASTA LA MUERTE GRIS ',
            precio: 12990,
            imagen: 'assets/img/subli/REALHASTALAMUERTE4.png'
        },
        {
            id: 5,
            nombre: 'POLERA UNISEX EMANNUEL NEGRA',
            precio: 12990,
            imagen: 'assets/img/subli/EMMANUEL1.png'
        },
        {
            id: 6,
            nombre: 'POLERA UNISEX EMANNUEL BLANCA',
            precio: 12990,
            imagen: 'assets/img/subli/EMMANUEL2.png'
        },
        {
            id: 7,
            nombre: 'POLERA UNISEX EMANNUEL GRIS',
            precio: 12990,
            imagen: 'assets/img/subli/EMMANUEL2.png'
        },
        {
            id: 8,
            nombre: 'POLERA UNISEX ANUEL GRIS CON ROSADO',
            precio: 12990,
            imagen: 'assets/img/subli/ANUEL1.png'
        },
        {
            id: 9,
            nombre: 'POLERA UNISEX ANUEL GRIS CON CELESTE ',
            precio: 12990,
            imagen: 'assets/img/subli/ANUEL2.png'
        },
        {
            id: 10,
            nombre: 'POLERA UNISEX ANUEL BLANCA CON ROSADO',
            precio: 12990,
            imagen: 'assets/img/subli/ANUEL3.png'
        },
        {
            id: 11,
            nombre: 'POLERA UNISEX ANUEL BLANCA CON CELESTE',
            precio: 12990,
            imagen: 'assets/img/subli/ANUEL4.png'
        },
        {
            id: 12,
            nombre: 'POLERA UNISEX ANUEL NEGRA CON ROSADO',
            precio: 12990,
            imagen: 'assets/img/subli/ANUEL5.png'
        },
        {
            id: 13,
            nombre: 'POLERA UNISEX COLO-COLO ESCUDO BLANCO',
            precio: 12990,
            imagen: 'assets/img/subli/CC1.PNG'
        },
        {
            id: 14,
            nombre: 'POLERA UNISEX COLO-COLO LETRAS ',
            precio: 12990,
            imagen: 'assets/img/subli/CC2.PNG'
        },
        {
            id: 15,
            nombre: 'POLERA UNISEX COLO-COLO ESCUDO GRIS',
            precio: 12990,
            imagen: 'assets/img/subli/CC3.PNG'
        },
        {
            id: 16,
            nombre: 'POLERA UNISEX COLO-COLO INDIO ',
            precio: 12990,
            imagen: 'assets/img/subli/CC4.PNG'
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
