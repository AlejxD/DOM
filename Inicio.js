document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    const crearSeccion = (id, contenido, estilos) => {
        const seccion = document.createElement('div');
        seccion.id = id;
        seccion.innerHTML = contenido;
        Object.assign(seccion.style, estilos);
        body.appendChild(seccion);
    };

    const estiloSeccion = {
        padding: '20px',
        border: '1px solid',
        fontFamily: 'Arial, sans-serif', 
    };

    crearSeccion('seccion1', '<h2>Aqui va la sección 1</h2><p>Seccion 1</p>', {
        ...estiloSeccion,
        backgroundColor: 'lightyellow',
        borderColor: 'yellow',
    });

    crearSeccion('seccion2', '<h2>Aqui va la sección 2</h2><p>Sección 2</p>', {
        ...estiloSeccion,
        backgroundColor: 'lightblue',
        borderColor: 'blue',
    });

    crearSeccion('seccion3', '<h2>Aqui va la sección 3</h2><p>Sección 3</p>', {
        ...estiloSeccion,
        backgroundColor: 'lightcoral',
        borderColor: 'red',
    });
});

