from django.db import models


class Usuario(models.Model):
    nombre = models.CharField(max_length=200)
    email = models.CharField(max_length=200, unique=True)
    telefono = models.CharField(max_length=200)
    entidad = models.CharField(max_length=200)
    cargo = models.CharField(max_length=200)
    localidad = models.CharField(max_length=200)

    # Muestra al Usuario de una manera mas elegante frente al usuario final.
    # Utiliza el ID combinado con el email ya que ambos son valores únicos para todos los usuarios.
    def __str__(self):
        return str(self.id) + '.' + self.email