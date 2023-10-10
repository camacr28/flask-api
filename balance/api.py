from flask import jsonify

from . import app
from .models import DBManager


@app.route('/api/v1/movimientos')
def listar_movimientos():
    try:
        db = DBManager(app.config['RUTA'])
        sql = 'SELECT fecha, concepto, tipo, cantidad FROM movimientos'
        movs = db.consultaSQL(sql)
        resultado = {
            'status': 'success',
            'results': movs
        }
    except Exception as ex:
        resultado = {
            'status': 'error',
            'message': str(ex)
        }
    return jsonify(resultado)


@app.route('/api/v1/movimientos/<int:id>')
def leer_movimiento(id):
    try:
        db = DBManager(app.config['RUTA'])
        mov = db.obtenerMovimiento(id)
        if mov:
            resultado = {
                'status': 'success',
                'results': mov
            }
            status_code = 200
        else:
            resultado = {
                'status': 'error',
                'message': f'No se ha encontrado el movimiento con ID = {id}'
            }
            status_code = 404
    except Exception as error:
        resultado = {
            'status': 'error',
            'message': str(error)
        }
        status_code = 500
    return jsonify(resultado), status_code
