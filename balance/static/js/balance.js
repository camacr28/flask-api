const peticion = new XMLHttpRequest();


function cargarMovimientos() {
    console.log('Has llamado a la función de cargar movimientos');
    peticion.open('GET', 'http://127.0.0.1:5000/api/v1/movimientos', false);
    peticion.send();
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
    console.log('html', html);
    const tabla = document.querySelector('#cuerpo-tabla');
    tabla.innerHTML = html;
}


window.onload = function () {
    console.log('Ya se han cargado los elementos de la página');
    // const boton = document.querySelector('#boton-recarga');
    const boton = document.getElementById('boton-recarga');
    boton.addEventListener('click', cargarMovimientos);
    console.log('FIN de la función window.onload');
}