class Usuario {
  constructor({ nombre, email, telefono, entidad, cargo, localidad }) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.entidad = entidad;
    this.cargo = cargo;
    this.localidad = localidad;
  }
}

module.exports = Usuario;