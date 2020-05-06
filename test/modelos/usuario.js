const assert = require('assert');

const Usuario = require('../../src/modelos/usuario');

describe('Usuario', () => {
  describe('Validaciones', () => {
    const camposUsuario = {
      nombre: 'Natalia Natalia',
      email: 'natalia@unknown.com',
      telefono: '1500000000',
      entidad: 'Hospital de desconocidos',
      cargo: 'Administrativo',
      localidad: 'Varela'
    };

    const assertCreacionUsuarioLanzaError = (campos, mensajeDeError) => {
      assert.throws(() => new Usuario(campos), {
        name: 'Error',
        message: mensajeDeError
      });
    };
 
    describe('Cuando el nombre es vacio', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, nombre: '' }, 'El nombre esta vacio');
    });

    describe('Cuando el email es vacio', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, email: '' }, 'El email esta vacio');
    });

    describe('Cuando el email no es un email', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, email: 'notanemail' }, 'El email tiene formato invalido');
    });

    describe('Cuando el telefono es vacio', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, telefono: '' }, 'El telefono esta vacio');
    });

    describe('Cuando el telefono no es un telefono', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, telefono: 'notaphone' }, 'El telefono tiene formato invalido');
    });

    describe('Cuando la entidad es vacia', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, entidad: '' }, 'La entidad esta vacia');
    });

    describe('Cuando el cargo es vacio', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, cargo: '' }, 'El cargo esta vacio');
    });

    describe('Cuando la localidad es vacia', () => {
      assertCreacionUsuarioLanzaError({ ...camposUsuario, localidad: '' }, 'La localidad esta vacia');
    });
  });
});