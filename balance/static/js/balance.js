const peticion = new XMLHttpRequest();


function cargarMovimientos() {
    console.log('Llamada a la función de cargar movimientos');
    peticion.open('GET', 'http://localhost:5000/api/v1/movimientos', true);
    peticion.send();
    console.log('Fin carga movimientos');
}


function mostrarMovimientos() {
    console.log('Entramos en mostrar movimientos');

    const resultado = JSON.parse(peticion.responseText);
    const movimientos = resultado.results;


    let html = '';
    for (let i = 0; i < movimientos.length; i = i + 1) {
        const mov = movimientos[i];
        html = html + `
            <tr>
              <td>${mov.fecha}</td>
              <td>${mov.concepto}</td>
              <td>${mov.tipo}</td>
              <td>${mov.cantidad}</td>
            </tr>
        `;
    }
    const tabla = document.querySelector('#cuerpo-tabla');
    tabla.innerHTML = html;

    console.log('Fin de la función mostrar movimientos');
}


window.onload = function () {
    console.log('Elementos de la página cargados');

    // const boton = document.querySelector('#boton-recarga');
    const boton = document.getElementById('boton-recarga');
    boton.addEventListener('click', cargarMovimientos);

    cargarMovimientos();

    peticion.onload = mostrarMovimientos;

    console.log('Fin de la función window.onload');
}