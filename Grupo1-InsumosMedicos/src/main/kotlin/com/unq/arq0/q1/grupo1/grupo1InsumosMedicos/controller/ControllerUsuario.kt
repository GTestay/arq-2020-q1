package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.controller

import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.controller.ControllerUsuario.Companion.API_URL
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model.Usuario
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.services.ServicioDeUsuario
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping(API_URL)
class ControllerUsuario(@Autowired val servicioDeUsuario: ServicioDeUsuario) {

    companion object {
        const val API_URL: String = "/api/usuarios";
    }

    @GetMapping
    fun usuarios(): List<Usuario> = servicioDeUsuario.traerATodosLosUsuarios()

    @PostMapping
    fun crearUsuario(@RequestBody usuarioACrear: Usuario): Usuario {
        return servicioDeUsuario.crearUsuario(usuarioACrear)
    }

}