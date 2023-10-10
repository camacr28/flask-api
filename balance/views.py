from flask import render_template

from . import app


# Vistas para templates


@app.route('/')
def home():
    return render_template('inicio.html')

