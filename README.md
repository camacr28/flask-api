# flask-api
App balance con API REST

# Verbos y formato de los endpoint en una API REST

- GET /movimientos ------------> Listar movimientos
- POST /movimientos -----------> Crear movimiento

- GET /movimientos/1 ----------> Leer movimiento con id=1
- POST /movimientos/1 ---------> Actualiza el movimiento con id=1 (sobreescribe todos los datos preexistentes)
- PUT /movimientos/1 ----------> Actualiza el movimiento con id=1 (solo sobreescribe los datos nuevos, es decir, sobreescritura parcial)
- DELETE /movimientos/1 -------> Elimina el movimiento con id=1


¡¡¡IMPORTANTE!!!
Versionar los endpoints (Una API es un contrato)
'/api/version/...'