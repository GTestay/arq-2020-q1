const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('simple-node-logger').createSimpleLogger('project.log');

const Usuario = require('./modelos/usuario');
const repositorioUsuarios = require('./repositorios/repositorioUsuarios');
const Solicitud = require('./modelos/solicitud');
const repositorioSolicitud = require('./repositorios/repositorioDeSolicitudes');

app.use(express.json());
app.use(cors())

app.route('/usuarios')
  .get(async (req, res) => {
    const usuarios = await repositorioUsuarios.obtenerTodos();

    res.send(usuarios);
  })
  .post(async (req, res) => {
    logger.info(`Creando usuario con: ${res.body}`)
    await repositorioUsuarios.agregar(new Usuario(req.body));

    res.status(201);
    res.send('{}');
  });

app.route('/solicitudes')
  .get(async (req, res) => {
    const solicitudes = await repositorioSolicitud.obtenerTodos();

    res.send(solicitudes);
  })
  .post(async (req, res) => {
  logger.info(`Creando solicitud con: ${res.body}`)
  await repositorioSolicitud.agregar(new Solicitud(req.body));

    res.status(201);
    res.send('{}');
  });

app.route('/login')
  .post(async (req, res) => {
    const email = req.body.email

    const usuario = await repositorioUsuarios.obtenerPorEmail(email);

    res.send(usuario)
  });

module.exports = app;