const mongoose = require('../../conf/db');

const solicitudSchema = new mongoose.Schema({
  area: String,
  insumo: String,
  estado: String,
});

const solicitud = mongoose.model('Solicitud', solicitudSchema);

class RepositorioSolicitudes {
  constructor() {
  }

  agregar({area, insumo, estado}) {
    solicitud.create({area, insumo, estado})
  }

  obtenerTodos() {
    return solicitud.find({});
  }

  async cantidad() {
    return await solicitud.count();
  }
}

const instance = new RepositorioSolicitudes();
module.exports = instance;