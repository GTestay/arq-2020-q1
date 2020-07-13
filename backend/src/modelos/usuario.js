class Usuario {
  constructor({ nombre, email, telefono, entidad, cargo, localidad, rol }) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.entidad = entidad;
    this.cargo = cargo;
    this.localidad = localidad;
    this.rol = rol;

    this._validarCampos();
  }

  _validarCampos() {
    this._validarTelefono();
    this._validarEmail();
    this._validarVacio(this.nombre, 'El nombre esta vacio');
    this._validarVacio(this.entidad, 'La entidad esta vacia');
    this._validarVacio(this.cargo, 'El cargo esta vacio');
    this._validarVacio(this.localidad, 'La localidad esta vacia');
  }

  _validarEmail() {
    this._validarVacio(this.email, 'El email esta vacio');
    this._validarFormato(this.email, /\S+@\S+\.\S+/, 'El email tiene formato invalido');
  }

  _validarTelefono() {
    this._validarVacio(this.telefono, 'El telefono esta vacio');
    this._validarFormato(this.telefono, /\+?\d+/, 'El telefono tiene formato invalido');
  }

  _validarVacio(campo, mensajeError) {
    if(campo === '') { throw new Error(mensajeError); }
  }

  _validarFormato(campo, formato, mensajeError) {
    if(!formato.test(campo)) { throw new Error(mensajeError); }
  }
}

module.exports = Usuario;