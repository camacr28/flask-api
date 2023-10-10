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
