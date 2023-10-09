from flask import jsonify

from . import app, RUTA
from .models import DBManager


@app.route('/')
def inicio():
    db = DBManager(RUTA)
    sql = 'SELECT fecha, concepto, tipo, cantidad FROM movimientos'
    movs = db.consultaSQL(sql)
    return jsonify(movs)
