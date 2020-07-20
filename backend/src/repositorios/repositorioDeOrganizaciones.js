const mongoose = require('../../conf/db');

const organizacionSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  localidad: String,
  insumos: [String],
});

const Organizacion = mongoose.model('Organizacion', organizacionSchema);

class RepositorioDeOrganizaciones {
  constructor() {}

  async agregar({ nombre, email, telefono, localidad, insumos }) {
    return Organizacion.create({
      nombre,
      email,
      telefono,
      localidad,
      insumos,
    });
  }

  obtenerTodos() {
    return Organizacion.find({});
  }

  async obtenerPorEmail(email) {
    return Organizacion.findOne({ email }).exec();
  }

}

const instance = new RepositorioDeOrganizaciones();
module.exports = instance;