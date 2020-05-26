package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.repository

import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model.Usuario
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import java.util.*

@DataJpaTest
internal class RepositorioDeUsuarioTest(
        @Autowired val repoDeUsuarios: RepositorioDeUsuario) {

    @Test
    fun `Se guarda un usuario`() {
        val usuario = Usuario("nombre", "email@gmail.com", "0303456", "entidad", "un cargo", "localidad", null)
        repoDeUsuarios.save(usuario)

        val findById: Optional<Usuario> = repoDeUsuarios.findByEmail(usuario.email)

        assertThat(findById).isPresent.get().isEqualTo(usuario)
    }



}