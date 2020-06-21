const mongoose = require('../../conf/db');
const Solicitud = require('../modelos/solicitud');

const solicitudSchema = new mongoose.Schema({
  email: String,
  area: String,
  insumo: String,
  estado: String,
});

const solicitud = mongoose.model('Solicitud', solicitudSchema);

class RepositorioSolicitudes {
  constructor() {
  }

  nueva({email, area, insumo, estado}) {
    solicitud.create({email, area, insumo, estado})
  }

  obtenerTodos() {
    return solicitud.find({});
  }

  async cancelar({ id, email }) {
    return solicitud
    .findOneAndUpdate({ _id: id, email },
        { estado: Solicitud.ESTADOS.CANCELADA },
        { new: true }).exec();
  }

  limpiar() {
    solicitud.deleteMany({});
  }

  async cantidad() {
    return await solicitud.count();
  }

}

const instance = new RepositorioSolicitudes();
module.exports = instance;