from rest_framework import serializers

from usuarios.models import Usuario


class UsuarioSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nombre = serializers.CharField(max_length=200)
    email = serializers.CharField(max_length=200)
    telefono = serializers.CharField(max_length=200)
    entidad = serializers.CharField(max_length=200)
    cargo = serializers.CharField(max_length=200)
    localidad = serializers.CharField(max_length=200)

    def create(self, validated_data):
        return Usuario.objects.create(**validated_data)