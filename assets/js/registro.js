document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    // Función para cargar las regiones en el select de regiones
    function cargarRegiones() {
        const selectRegion = form.region;

        // Limpiar opciones existentes
        selectRegion.innerHTML = '';

        // Agregar una opción predeterminada
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = 'Seleccione una región';
        selectRegion.appendChild(optionDefault);

        // Agregar opciones de regiones
        regionesChile.forEach(region => {
            const optionRegion = document.createElement('option');
            optionRegion.value = region.nombre;
            optionRegion.textContent = region.nombre;
            selectRegion.appendChild(optionRegion);
        });
    }

    // Cargar las regiones al cargar la página
    cargarRegiones();

    // Función para cargar las comunas según la región seleccionada
    function cargarComunas(regionSeleccionada) {
        const selectComuna = form.comuna;

        // Encontrar la región seleccionada en la lista de regiones de Chile
        const region = regionesChile.find(region => region.nombre === regionSeleccionada);

        // Limpiar opciones existentes
        selectComuna.innerHTML = '';

        // Agregar una opción predeterminada
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = 'Seleccione una comuna';
        selectComuna.appendChild(optionDefault);

        // Agregar opciones de comunas si se selecciona una región válida
        if (region) {
            region.comunas.forEach(comuna => {
                const optionComuna = document.createElement('option');
                optionComuna.value = comuna;
                optionComuna.textContent = comuna;
                selectComuna.appendChild(optionComuna);
            });
        }
    }

    // Evento change para cargar las comunas cuando se selecciona una región
    form.region.addEventListener('change', function () {
        const regionSeleccionada = this.value;
        cargarComunas(regionSeleccionada);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = form.nombre.value;
        const apellido = form.apellido.value;
        const region = form.region.value;
        const comuna = form.comuna.value;
        const email = form.email.value;
        const fechaNacimiento = form.fechaNacimiento.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const ofertas = form.ofertas.checked;
        const acepto = form.acepto.checked;

        // Validar los campos (aquí puedes agregar más validaciones según tus requisitos)
        if (!nombre || !apellido || !region || !comuna || !email || !fechaNacimiento || !password || !confirmPassword || !ofertas || !acepto) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Simular el envío de datos a un servidor (aquí puedes realizar una solicitud HTTP real)
        console.log('Registrando usuario...');
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Región:', region);
        console.log('Comuna:', comuna);
        console.log('Correo electrónico:', email);
        console.log('Fecha de Nacimiento:', fechaNacimiento);
        console.log('Contraseña:', password);
        console.log('Deseo recibir ofertas y promociones:', ofertas);
        console.log('Acepto las condiciones de uso y privacidad:', acepto);

        // Limpiar el formulario después de enviar los datos (opcional)
        form.reset();
    });
});

