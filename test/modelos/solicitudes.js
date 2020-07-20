const assert = require('assert');

const Solicitud = require('../../src/modelos/solicitud');

describe('Solicitud', () => {
  describe('Solicitud', () => {
    const camposDeSolicitudNueva = {
      area: 'Un area re piola',
      insumo: 'Un insumillo para el hospitalillo'
    };

    const assertCreacionDeSolicitudLanzaError = (campos, mensajeDeError) => {
      assert.throws(() => new Solicitud(campos), {
        name: 'Error',
        message: mensajeDeError
      });
    };

    describe('Cuando el área es vacia', () => {
      assertCreacionDeSolicitudLanzaError({...camposDeSolicitudNueva, area: ''}, 'El área está vacía');
    });

    describe('Cuando el insumo es vacio', () => {
      assertCreacionDeSolicitudLanzaError({...camposDeSolicitudNueva, insumo: ''}, 'El insumo es vacío');
    });
  });
});