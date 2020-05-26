package com.unq.arq0.q1.grupo1.grupo1InsumosMedicos.model

import org.junit.jupiter.api.Assertions.fail
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.opentest4j.AssertionFailedError

class UsuarioTest {


    @Test
    fun `No se puede crear un usuario sin email valido`() {
        assertThrows<AssertionFailedError> {
            Usuario("a", "un_E-mail.Invalido@", "1", "a", "a", "a", null)
            fail()
        }
        assertThrows<AssertionFailedError> {
            Usuario("a", "@gmail.com", "1", "a", "a", "a", null)
            fail()
        }
    }

    @Test
    fun `No se puede crear un usuario sin nombre`() {
        assertThrows<AssertionFailedError> {
            Usuario(" ", "email@gmail.com", "1", "a", "a", "a", null)
            fail()
        }
    }

    @Test
    fun `No se puede crear un usuario sin telefono`() {
        assertThrows<AssertionFailedError> {
            Usuario("a", "email@gmail.com", " ", "a", "a", "a", null)
            fail()
        }
    }

    @Test
    fun `No se puede crear un usuario sin entidad`() {
        assertThrows<AssertionFailedError> {
            Usuario("a", "email@gmail.com", "b", " ", "a", "a", null)
            fail()
        }
    }

    @Test
    fun `No se puede crear un usuario sin cargo`() {
        assertThrows<AssertionFailedError> {
            Usuario("a", "email@gmail.com", "b", "a", " ", "a", null)
            fail()
        }
    }

    @Test
    fun `No se puede crear un usuario sin localidad`() {
        assertThrows<AssertionFailedError> {
            Usuario("a", "email@gmail.com", "b", "a", "a", " ", null)
            fail()
        }
    }

}