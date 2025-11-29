from flask import Flask
from flask_cors import CORS
from apis.apis import api  # ← Importar desde apis.py

app = Flask(__name__)
CORS(app)

# Registrar las rutas de la API
app.register_blueprint(api, url_prefix='/api')

@app.route('/')
def home():
    return "✅ Backend del Albergue de Perros - FUNCIONANDO"

if __name__ == '__main__':
    print("🚀 Backend funcionando en: http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=False)