const express = require('express');
const app = express();
const cors = require('cors');
const { logger, requestMiddleware } = require('../conf/logger');

const Usuario = require('./modelos/usuario');
const Solicitud = require('./modelos/solicitud');
const repositorioUsuarios = require('./repositorios/repositorioUsuarios');
const repositorioSolicitud = require('./repositorios/repositorioDeSolicitudes');

app.use(express.json());
app.use(cors());
app.use(requestMiddleware);

app.route('/usuarios')
    .get(async (req, res) => {
        const usuarios = await repositorioUsuarios.obtenerTodos();

        res.send(usuarios);
    })
    
    .post(async (req, res) => {
        logger.appInfo(`Usuario creado`);
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
        logger.appInfo(`Solicitud creada`);
        await repositorioSolicitud.nueva(new Solicitud(req.body));
        
        res.status(201);
        res.send('{}');
});

app.route('/solicitudes/:id/cancelar')
    .patch(async (req, res) => {
        const id = req.params.id;
        const email = req.body.email;
        const solicitud = await repositorioSolicitud.cancelar({ id, email });
    
        if(!!solicitud) {
            logger.appInfo(`Solicitud de ID ${id} del usuario ${email} ha sido cancelada`);
            res.send(solicitud);
        } else {
            logger.appWarn(`Solicitud de ID ${id} del usuario ${email} no se ha podido cancelar`);
            res.status(404);
            res.send('No se pudo cancelar');
        }
});

app.route('/login')
    .post(async (req, res) => {
        const email = req.body.email;
        logger.appInfo(`Logueando a ${email}`);

        const usuario = await repositorioUsuarios.obtenerPorEmail(email);
    
        if(!!usuario) {
            logger.appInfo(`${email} se ha logueado satisfactoriamente`);
            res.send(usuario);
        } else {
            logger.appWarn(`${email} no se ha logueado satisfactoriamente`);
            res.status(404);
            res.send('No se encontró el usuario :(');
        }
});

module.exports = app;