package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.controller.ControllerUsuario.Companion.API_URL
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model.Usuario
import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.services.ServicioDeUsuario
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultActions
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*
import org.springframework.transaction.annotation.Transactional

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class ControllerUsuarioTest(
        @Autowired val servicioDeUsuario: ServicioDeUsuario,
        @Autowired val mvc: MockMvc,
        @Autowired val objectMapper: ObjectMapper
) {

    @Test
    fun `cuando no hay usuarios, no se trae nada`() {
        getUsers()
                .andExpect(content().json("[]"))
    }

    @Test
    fun `cuando hay usuarios, se traen deserializados`() {
        val usuario = Usuario("nombre", "email@gmail.com", "0303456", "entidad", "un cargo", "localidad", null)
        servicioDeUsuario.crearUsuario(usuario)

        getUsers()
                .andExpect(jsonPath("\$.[0].id").value(usuario.id!!))
                .andExpect(jsonPath("\$.[0].email").value(usuario.email))
                .andExpect(jsonPath("\$.[0].cargo").value(usuario.cargo))
                .andExpect(jsonPath("\$.[0].entidad").value(usuario.entidad))
                .andExpect(jsonPath("\$.[0].localidad").value(usuario.localidad))
                .andExpect(jsonPath("\$.[0].nombre").value(usuario.nombre))
                .andExpect(jsonPath("\$.[0].telefono").value(usuario.telefono))
    }

    private fun getUsers(): ResultActions {
        return mvc.perform(get(API_URL).accept(MediaType.APPLICATION_JSON))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk)
    }

    @Test
    fun `se puede guardar un usuario, con una request valida`() {
        val usuario = Usuario("nombre", "email@gmail.com", "0303456", "entidad", "un cargo", "localidad", null)

        val json: String = objectMapper.writeValueAsString(usuario)

        mvc.perform(post(API_URL)
                .content(json)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk)
                .andExpect(jsonPath("\$.id").isNumber)
                .andReturn()

        assertThat(servicioDeUsuario.repositorioDeUsuario.findByEmail(usuario.email)).isPresent
    }

    @Test
    fun `Cuando se quiere crear un usuario con un mail existe, se arroja un bad request`() {
        val email = "email@gmail.com"
        val usuario = Usuario("nombre", email, "0303456", "entidad", "un cargo", "localidad", null)
        servicioDeUsuario.crearUsuario(usuario)


        val json: String = objectMapper.writeValueAsString(usuario)

        mvc.perform(post(API_URL)
                .content(json)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest)
                .andExpect(content().string("El usuario ya está registrado"))
    }

}