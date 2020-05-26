package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.services

import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.exceptions.UsuarioYaCreadoException
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model.Usuario
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.repository.RepositorioDeUsuario
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.jupiter.api.fail
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.transaction.annotation.Transactional

@SpringBootTest
@Transactional
class ServicioDeUsuarioTest(
        @Autowired val repositorioDeUsuario: RepositorioDeUsuario,
        @Autowired val sevicioDeUsuario: ServicioDeUsuario
) {

    @Test
    fun `Se pueden crear usuarios`() {
        val nuevoUsuario = Usuario("nombre", "email@gmail.com", "0303456", "entidad", "un cargo", "localidad", null)

        sevicioDeUsuario.crearUsuario(nuevoUsuario)

        repositorioDeUsuario.findByEmail(nuevoUsuario.email).isPresent
    }

    @Test
    fun `No se puede guardar un usuario si ya estaba registrado con el mismo email`() {
        val email = "email@gmail.com"
        val usuarioYaRegistrado = Usuario("nombre", email, "0303456", "entidad", "un cargo", "localidad", null)
        sevicioDeUsuario.crearUsuario(usuarioYaRegistrado)

        assertThrows<UsuarioYaCreadoException> {
            val usuario = Usuario("otro nombre", email, "1234", "bla", "un cargo 1", "localidad", null)
            sevicioDeUsuario.crearUsuario(usuario)
            fail("Algo paso")
        }
    }
}