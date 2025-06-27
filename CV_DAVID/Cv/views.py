from django.shortcuts import render
from django.http import HttpResponse #agregar esta linea para importar HttpResponse y utilizarlo en la vista



# Create your views here.
def hola(request):
    return render(request,'Cv/index.html') #se agrega la vista render para mostrar el html de la app Cv


def saludo(request):
    return HttpResponse('Hola, soy David y estoy aprendiendo Django')

def practica(request):
    return HttpResponse('una prueba mas de nuestra app')

    ##ACTIVAR EL ENTORNO VIRTUAL