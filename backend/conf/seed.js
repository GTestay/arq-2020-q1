const mongoose = require('./db');
const { logger } = require('./logger');
const repositorioUsuarios = require('../src/repositorios/repositorioUsuarios');
const { administrador } = require('../src/modelos/roles');

const crearUsuarioAdministrador = async () => {
  logger.serverInfo(`Creando usuario administrador inicial`);

  const emailAdministrador = 'admin@insumos.com';
  const usuarioAdministrador = await repositorioUsuarios.obtenerPorEmail(emailAdministrador);
  
  if(!usuarioAdministrador) {
    repositorioUsuarios.agregar({ 
      nombre: 'Admin',
      email: emailAdministrador,
      telefono: '1122223333',
      entidad: 'UNQ',
      cargo: 'Estudiante',
      localidad: 'Bernal',
      rol: administrador
    }).then(() => {
      mongoose.disconnect();
    });
  
    logger.serverInfo(`Se ha creado el usuario administrador inicial satisfactoriamente`);
  } else {
    mongoose.disconnect();
    logger.serverInfo(`El usuario administrador ya existía previamente`);
  }
};

crearUsuarioAdministrador();




