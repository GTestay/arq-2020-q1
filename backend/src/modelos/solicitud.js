const ESTADOS = {PENDIENTE: "PENDIENTE", CANCELADA: "CANCELADA", APROBADA: "APROBADA", DESAPROBADA: "DESAPROBADA"};

class Solicitud {
  constructor({area, insumo}) {
    this.area = area;
    this.insumo = insumo;
    this.estado = ESTADOS.PENDIENTE;

    this._validarCampos();
  }

  _validarCampos() {
    this._validarVacio(this.area, 'El área está vacía');
    this._validarVacio(this.insumo, 'El insumo es vacío');
  }

  _validarVacio(campo, mensajeError) {
    if (campo === '') {
      throw new Error(mensajeError);
    }
  }

}

module.exports = Solicitud;