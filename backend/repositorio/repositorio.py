import pymysql

class DatabaseRepositorio:
    def __init__(self):
        self.conexion = pymysql.connect(
            host='localhost',
            user='root',
            password='1234',
            database='albergue_perros',
            charset='utf8mb4'
        )
    
    def registrar_perro(self, perro):
        cursor = self.conexion.cursor()  # ← ESTA LÍNEA DEBE TENER INDENTACIÓN
        query = "INSERT INTO perros (nombre, raza, edad, tamano) VALUES (%s, %s, %s, %s)"
        valores = (perro['nombre'], perro['raza'], perro['edad'], perro['tamano'])
        cursor.execute(query, valores)
        self.conexion.commit()
        id_perro = cursor.lastrowid
        cursor.close()
        return id_perro
    
    def registrar_donacion(self, donacion):
        cursor = self.conexion.cursor()
        query = "INSERT INTO donaciones (monto, mensaje, metodo_pago) VALUES (%s, %s, %s)"
        valores = (donacion['monto'], donacion['mensaje'], donacion['metodo_pago'])  # ← También cambiar aquí a diccionario
        cursor.execute(query, valores)
        self.conexion.commit()
        id_donacion = cursor.lastrowid
        cursor.close()
        return id_donacion