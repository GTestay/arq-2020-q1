from django.test import TestCase
from django.urls import reverse

from usuarios.models import Usuario


class UsuarioTests(TestCase):

    def test_un_usuario_para_mostrarse_utiliza_su_id_mas_su_email(self):
        usuario = Usuario(id=1,
                          nombre='Martin Gonzalez',
                          email='martinegonzalez95@gmail.com',
                          telefono='4983-7029',
                          entidad='UNQ',
                          cargo='Jefe de Laboratorio',
                          localidad='Bernal')

        self.assertEqual(usuario.__str__(), str(usuario.id) + '.' + usuario.email)


class UsuarioViewTests(TestCase):

    def test_al_recibir_los_parametros_correctos_se_crea_un_usuario(self):
        data = {
            'nombre': 'Martin Gonzalez',
            'telefono': '4983-7029',
            'email': 'martinegonzalez95@gmail.com',
            'entidad': 'UNQ',
            'cargo': 'Jefe de Laboratorio',
            'localidad': 'Bernal',
        }

        self.assertEqual(Usuario.objects.count(), 0)

        response = self.client.post(reverse('nuevo_usuario'), data=data)

        usuario = Usuario.objects.get(email='martinegonzalez95@gmail.com')

        self.assertEqual(response.status_code, 201)
        self.assertEqual(Usuario.objects.count(), 1)
        self.assertEqual(usuario.nombre, 'Martin Gonzalez')
        self.assertEqual(usuario.telefono, '4983-7029')
        self.assertEqual(usuario.entidad, 'UNQ')
        self.assertEqual(usuario.cargo, 'Jefe de Laboratorio')
        self.assertEqual(usuario.localidad, 'Bernal')

