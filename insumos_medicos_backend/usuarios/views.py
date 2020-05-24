from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from usuarios.serializers import UsuarioSerializer


def index(request):
    return HttpResponse('Hola mundo!')

@api_view(['POST'])
def nuevo_usuario(request):
    nuevo_usuario = UsuarioSerializer(data=request.data)

    if nuevo_usuario.is_valid():
        nuevo_usuario.save()
        return Response(nuevo_usuario.data, status=status.HTTP_201_CREATED)

    return Response(nuevo_usuario.errors, status=status.HTTP_400_BAD_REQUEST)