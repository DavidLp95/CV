from django.urls import path
from . import views #se agrega esta linea para importar las vistas de la app Cv

urlpatterns = [
    path('',views.hola, name='hola'),# se anexa la vista hola a la url vacia
    path('saludo/',views.saludo, name='saludo'),# se anexa la vista saludo a la url saludo
    path('practica/', views.practica, name= 'practica'),
]