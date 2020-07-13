export default class Usuario {
  constructor({ nombre, email, telefono, entidad, cargo, localidad, rol }) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.entidad = entidad;
    this.cargo = cargo;
    this.localidad = localidad;
    this.rol = rol;
  }

  esAdministrador() {
    return this.rol === 'administrador';
  };

  esSolicitante() {
    return this.rol === 'solicitante';
  }
};
