const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dev', {useNewUrlParser: true, useUnifiedTopology: true});

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

  cantidad() {
    return solicitud.count();
  }

  limpiar() {
    solicitud.deleteMany({});
  }
}

const instance = new RepositorioSolicitudes();
module.exports = instance;