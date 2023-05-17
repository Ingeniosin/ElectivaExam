from django.db import models


# Create your models here.
class Cafe(models.Model):
    nombre = models.CharField(max_length=50)
    tipo = models.CharField(max_length=50, choices=(
        ('Blend', 'Blend'),
    ))
    region = models.CharField(max_length=50)
