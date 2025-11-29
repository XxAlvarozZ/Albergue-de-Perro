from repositorio.repositorio import DatabaseRepositorio

class AlbergueServicio:
    def __init__(self):
        self.repositorio = DatabaseRepositorio()
    
    def registrar_perro(self, nombre, raza, edad, tamano):
       
        perro_data = {
            'nombre': nombre,
            'raza': raza, 
            'edad': edad,
            'tamano': tamano
        }
        return self.repositorio.registrar_perro(perro_data)
    
    def registrar_donacion(self, monto, mensaje, metodo_pago):
        donacion_data = {
            'monto': monto,
            'mensaje': mensaje,
            'metodo_pago': metodo_pago
        }
        return self.repositorio.registrar_donacion(donacion_data)