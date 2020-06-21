const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dev', { useNewUrlParser: true, useUnifiedTopology: true });

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  entidad: String,
  cargo: String,
  localidad: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

class RepositorioUsuarios {
  constructor() {}

  agregar({ nombre, email, telefono, entidad, cargo, localidad }) {
    Usuario.create({
      nombre: nombre,
      email: email,
      telefono: telefono,
      entidad: entidad,
      cargo: cargo,
      localidad: localidad
    })
  }

  obtenerTodos() {
    return Usuario.find({});
  }

  async obtenerPorEmail(emailUsuario) {
    return Usuario.findOne({ email: emailUsuario}).exec();
  }

  cantidad() {
    return Usuario.count();
  }

  limpiar() {
    Usuario.deleteMany({});
  }
}

const instance = new RepositorioUsuarios();
module.exports = instance;