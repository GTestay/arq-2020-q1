package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

@Entity
class Usuario(
        @field:NotBlank var nombre: String,
        @field:Email var email: String,
        @field:NotBlank var telefono: String,
        @field:NotBlank var entidad: String,
        @field:NotBlank var cargo: String,
        @field:NotBlank val localidad: String,
        @Id @GeneratedValue var id: Long? = null
)