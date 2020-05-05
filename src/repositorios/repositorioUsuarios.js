class RepositorioUsuarios {
  constructor() {
    this.usuarios = [];
  }

  agregar(usuario) {
    this.usuarios.push(usuario);
  }

  obtenerTodos() {
    return this.usuarios;
  }

  cantidad() {
    return this.usuarios.length;
  }

  limpiar() {
    this.usuarios = [];
  }
}

const instance = new RepositorioUsuarios();
module.exports = instance;