package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.services

import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.exceptions.UsuarioYaCreadoException
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model.Usuario
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.repository.RepositorioDeUsuario
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ServicioDeUsuario(@Autowired val repositorioDeUsuario: RepositorioDeUsuario) {

    fun crearUsuario(nuevoUsuario: Usuario): Usuario {
        repositorioDeUsuario.findByEmail(nuevoUsuario.email).ifPresent {
            throw UsuarioYaCreadoException()
        }

        repositorioDeUsuario.save(nuevoUsuario)

        return nuevoUsuario
    }

    fun traerATodosLosUsuarios(): List<Usuario> {
       return repositorioDeUsuario.findAll()
    }
}