const express = require('express');
const app = express();
const cors = require('cors');
const { logger, requestMiddleware } = require('../conf/logger');
const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv').config().parsed;

const Usuario = require('./modelos/usuario');
const Solicitud = require('./modelos/solicitud');
const repositorioUsuarios = require('./repositorios/repositorioUsuarios');
const repositorioSolicitud = require('./repositorios/repositorioDeSolicitudes');

app.set('jwtToken', dotEnv.JWT_TOKEN);
app.use(express.json());
app.use(cors());
app.use(requestMiddleware);

const rutasAutenticadas = express.Router();

if(process.env.NODE_ENV !== 'test'){
    rutasAutenticadas.use((req, res, next) => {
        const token = req.headers['token-usuario'];
        if (!!token) {
            jwt.verify(token, app.get('jwtToken'), (err, decoded) => {
                if(err) {
                    respuestaDeError(res, 401, 'Ese token es inválido');
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            respuestaDeError(res, 401, 'No enviaste el token');
        }
    });
}

rutasAutenticadas.route('/usuarios')
    .get(async (req, res) => {
        const usuarios = await repositorioUsuarios.obtenerTodos();

        res.send(usuarios);
    })

    .post(async (req, res) => {
        await repositorioUsuarios.agregar(new Usuario(req.body));

        respuestaDeCreacion(res, 'Usuario creado');
    });

rutasAutenticadas.route('/solicitudes')
    .get( async (req, res) => {
        const solicitudes = await repositorioSolicitud.obtenerTodos();

        res.send(solicitudes);
    })

    .post(async (req, res) => {
        await repositorioSolicitud.nueva(new Solicitud(req.body));

       respuestaDeCreacion(res, 'Solicitud creada');
});

rutasAutenticadas.route('/solicitudes/:id/cancelar')
    .patch(async (req, res) => {
        const id = req.params.id;
        const email = req.body.email;
        const solicitud = await repositorioSolicitud.cancelar({ id, email });

        if(!!solicitud) {
            logger.appInfo(`Solicitud de ID ${id} del usuario ${email} ha sido cancelada`);
            res.send(solicitud);
        } else {
            respuestaDeError(res, 404, `Solicitud de ID ${id} del usuario ${email} no se ha podido cancelar`);
        }
});

const rutasSinAutenticacion = express.Router()

rutasSinAutenticacion.route('/login')
    .post(async (req, res) => {
        const email = req.body.email;
        logger.appInfo(`Logueando a ${email}`);

        const usuario = await repositorioUsuarios.obtenerPorEmail(email);
    if(!!usuario) {
            logger.appInfo(`${email} se ha logueado satisfactoriamente`);
            res.send({ usuario: usuario, token: jwt.sign(usuario.toString(), dotEnv.JWT_TOKEN) });
        } else {
            respuestaDeError(res, 404, `${email} no se ha logueado satisfactoriamente`);
        }
});

function respuestaDeCreacion(res, mensajeLog) {
  logger.appInfo(mensajeLog);
  res.status(201);
  res.send('{}');
}

function respuestaDeError(res, status, mensaje) {
    logger.appWarn(mensaje);
    res.status(status);
    res.send({ mensaje });
}

app.use('/', rutasSinAutenticacion)
app.use('/', rutasAutenticadas)

module.exports = app;