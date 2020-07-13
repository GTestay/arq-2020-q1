const mongoose = require('../../conf/db');
const { solicitante } = require('../modelos/roles');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  entidad: String,
  cargo: String,
  localidad: String,
  rol: { type: String, default: solicitante },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

class RepositorioUsuarios {
  constructor() {}

  agregar({ nombre, email, telefono, entidad, cargo, localidad, rol }) {
    Usuario.create({
      nombre: nombre,
      email: email,
      telefono: telefono,
      entidad: entidad,
      cargo: cargo,
      localidad: localidad,
      rol: rol
    })
  }

  obtenerTodos() {
    return Usuario.find({});
  }

  async obtenerPorEmail(emailUsuario) {
    return Usuario.findOne({ email: emailUsuario }).exec();
  }

  async cantidad() {
    return await Usuario.countDocuments();
  }
}

const instance = new RepositorioUsuarios();
module.exports = instance;