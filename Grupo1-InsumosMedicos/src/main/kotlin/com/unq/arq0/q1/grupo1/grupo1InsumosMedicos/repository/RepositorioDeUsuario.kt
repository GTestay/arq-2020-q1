package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.repository

import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model.Usuario
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface RepositorioDeUsuario : JpaRepository<Usuario, Long> {
    fun findByEmail(email: String): Optional<Usuario>
}