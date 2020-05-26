package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.controller

import com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.exceptions.UsuarioYaCreadoException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler


@ControllerAdvice
class ManejadorDeExcepciones {

    @ExceptionHandler(UsuarioYaCreadoException::class)
    fun handleUsuarioNoEncontradoException(excepcion: UsuarioYaCreadoException): ResponseEntity<String>? {
        return ResponseEntity<String>(excepcion.message, HttpStatus.BAD_REQUEST)
    }
}