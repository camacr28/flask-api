function cargarMovimientos() {
    console.log('Has llamado a la función de cargar movimientos');
}


window.onload = function () {
    console.log('Ya se han cargado los elementos de la página');
    // const boton = document.querySelector('#boton-recarga');
    const boton = document.getElementById('boton-recarga');
    boton.addEventListener('click', cargarMovimientos);
    console.log('FIN de la función window.onload');
}