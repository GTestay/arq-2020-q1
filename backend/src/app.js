const express = require('express');
const app = express();
const cors = require('cors')

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
    await repositorioSolicitud.agregar(new Solicitud(req.body));

    res.status(201);
    res.send('{}');
  });

module.exports = app;