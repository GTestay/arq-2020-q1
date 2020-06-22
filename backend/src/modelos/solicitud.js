
class Solicitud {
  constructor({email, area, insumo}) {
    this.email = email;
    this.area = area;
    this.insumo = insumo;
    this.estado = Solicitud.ESTADOS.PENDIENTE;

    this._validarCampos();
  }
  static ESTADOS = {PENDIENTE: "PENDIENTE", CANCELADA: "CANCELADA", APROBADA: "APROBADA", DESAPROBADA: "DESAPROBADA"};

  _validarCampos() {
    this._validarVacio(this.area, 'El área está vacía');
    this._validarVacio(this.insumo, 'El insumo es vacío');
    this._validarVacio(this.email, 'Necesita un email');
  }

  _validarVacio(campo, mensajeError) {
    if (campo === '') {
      throw new Error(mensajeError);
    }
  }

}

module.exports = Solicitud;