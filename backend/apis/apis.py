from flask import Blueprint, request, jsonify
import pymysql

api = Blueprint('api', __name__)

# Conexión a MySQL
def conectar_db():
    try:
        return pymysql.connect(
            host='localhost',
            user='root',
            password='1234',  
            database='albergue_perros',
            charset='utf8mb4'
        )
    except Exception as e:
        print(f"❌ Error conectando a MySQL: {e}")
        return None

@api.route('/perros', methods=['POST'])
def registrar_perro():
    try:
        datos = request.get_json()
        print(f"📝 Recibiendo perro: {datos}")
        
        conexion = conectar_db()
        if not conexion:
            return jsonify({"error": "Error de conexión a la base de datos"}), 500
            
        cursor = conexion.cursor()
        
        sql = "INSERT INTO perros (nombre, raza, edad, tamano) VALUES (%s, %s, %s, %s)"
        valores = (datos['nombre'], datos['raza'], datos['edad'], datos['tamano'])
        
        cursor.execute(sql, valores)
        conexion.commit()
        id_perro = cursor.lastrowid
        
        cursor.close()
        conexion.close()
        
        print(f"✅ Perro registrado con ID: {id_perro}")
        return jsonify({
            "mensaje": "Gracias por el registro", 
            "id": id_perro
        }), 201
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({"error": str(e)}), 400

@api.route('/donaciones', methods=['POST'])
def registrar_donacion():
    try:
        datos = request.get_json()
        print(f"💰 Recibiendo donación: {datos}")
        
        conexion = conectar_db()
        if not conexion:
            return jsonify({"error": "Error de conexión a la base de datos"}), 500
            
        cursor = conexion.cursor()
        
        sql = "INSERT INTO donaciones (monto, mensaje, metodo_pago) VALUES (%s, %s, %s)"
        valores = (datos['monto'], datos['mensaje'], datos['metodo_pago'])
        
        cursor.execute(sql, valores)
        conexion.commit()
        id_donacion = cursor.lastrowid
        
        cursor.close()
        conexion.close()
        
        print(f"✅ Donación registrada con ID: {id_donacion}")
        return jsonify({
            "mensaje": "Gracias por su participación y donación",
            "id": id_donacion
        }), 201
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({"error": str(e)}), 400