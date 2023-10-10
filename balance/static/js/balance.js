const peticion = new XMLHttpRequest();

function cargar_movimientos() {
    console.log('Llamada a la función de cargar movimientos');
    peticion.open('GET', 'http://localhost:5000/api/v1/movimientos', false);
    peticion.send();
    console.log(peticion.responseText);
}


window.onload = function () {
    console.log('Elementos de la página cargados');
    const boton = document.getElementById('boton-recarga');
    boton.addEventListener('click', cargar_movimientos);
    console.log('Fin de la función window.onload');
}

