const peticion = new XMLHttpRequest();


function cargarMovimientos() {
    console.log('Has llamado a la función de cargar movimientos');
    peticion.open('GET', 'http://localhost:5000/api/v1/movimientos', true);
    peticion.send();
    console.log('FIN carga movimientos');
}


function mostrarMovimientos() {
    console.log('Entramos en mostrar movimientos');

    const resultado = JSON.parse(peticion.responseText);
    const movimientos = resultado.results;


    let html = '';
    /*
    En Python:
    for i in range(len(movimientos)):
        i = i + 1
    */
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

    console.log('FIN de la función mostrar movimientos');
}


window.onload = function () {
    console.log('Ya se han cargado los elementos de la págin (window.onload)');

    // const boton = document.querySelector('#boton-recarga');
    const boton = document.getElementById('boton-recarga');
    boton.addEventListener('click', cargarMovimientos);

    cargarMovimientos();

    peticion.onload = mostrarMovimientos;

    console.log('FIN de la función window.onload');
}