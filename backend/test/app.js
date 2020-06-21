const request = require('supertest');
const assert = require('assert');

const setup = require('./setup');
const App = require('../src/app');
const Usuario = require('../src/modelos/usuario');
const Solicitud = require('../src/modelos/solicitud');
const RepositorioUsuarios = require('../src/repositorios/repositorioUsuarios');
const RepositorioSolicitudes = require('../src/repositorios/repositorioDeSolicitudes');

// TODO: Buscar como configurar UNA SOLA VEZ.
before(async () => await setup.connectDatabase());
afterEach(async () => await setup.clearDatabase());
after(async () => await setup.closeDatabase());

describe('/usuarios', () => {
  describe('GET', () => {
    beforeEach(() => {
      RepositorioUsuarios.agregar(
        new Usuario({
          nombre: 'Natalia Natalia',
          email: 'natalia@unknown.com',
          telefono: '1500000000',
          entidad: 'Hospital de desconocidos',
          cargo: 'Administrativo',
          localidad: 'Varela'
        })
      )
    });

    it('obtiene todos los usuarios', (done) => {
      request(App)
        .get('/usuarios')
        .expect('Content-Type', /json/)
        .expect(200, {})
        .end((_, response) => {
          const usuario = response.body[0];

          assert.equal(usuario.nombre, 'Natalia Natalia');
          assert.equal(usuario.email, 'natalia@unknown.com');
          assert.equal(usuario.telefono, '1500000000');
          assert.equal(usuario.entidad, 'Hospital de desconocidos');
          assert.equal(usuario.cargo, 'Administrativo');
          assert.equal(usuario.localidad, 'Varela');

          done();
        });
    });
  });

  describe('POST', () => {
    it('crea un nuevo usuario', (done) => {
      request(App)
        .post('/usuarios')
        .send({ 
          nombre: 'Natalia Natalia',
          email: 'natalia@unknown.com',
          telefono: '1500000000',
          entidad: 'Hospital de desconocidos',
          cargo: 'Administrativo',
          localidad: 'Varela'
         })
        .expect('Content-Type', /json/)
        .expect(201, {})
        .end(async () => {
          assert.equal(await RepositorioUsuarios.cantidad(), 1);

          done();
        })
    });
  });
});

describe('usuarios/:email', () => {
  beforeEach(() => {
    RepositorioUsuarios.limpiar();
  });

  describe('GET', () => {
    beforeEach(() => {
      RepositorioUsuarios.agregar(
        new Usuario({
          nombre: 'Natalia Natalia',
          email: 'natalia@unknown.com',
          telefono: '1500000000',
          entidad: 'Hospital de desconocidos',
          cargo: 'Administrativo',
          localidad: 'Varela'
        })
      )
    });

    it('obtiene al usuario con ese email', (done) => {
      request(App)
        .get('/usuarios/?email=natalia@unknown.com')
        .expect('Content-Type', /json/)
        .expect(200, { 
          nombre: 'Natalia Natalia',
          email: 'natalia@unknown.com',
          telefono: '1500000000',
          entidad: 'Hospital de desconocidos',
          cargo: 'Administrativo',
          localidad: 'Varela'
        } , done)
    });
  });
});
describe('/solicitud', () => {
  describe('GET', () => {
    beforeEach(() => {
      RepositorioSolicitudes.agregar(
        new Solicitud({
          area: 'RRHH',
          insumo: 'Insumo',
        })
      )
    });

    it('obtiene todos las solicitudes', (done) => {
      request(App)
        .get('/solicitudes')
        .expect('Content-Type', /json/)
        .end((_, response) => {
          const solicitud = response.body[0];

          assert.equal(solicitud.area, 'RRHH');
          assert.equal(solicitud.insumo, 'Insumo');

          done();
        });
    });
  });

  describe('POST', () => {
    it('crea un nueva solicitud', (done) => {
      request(App)
        .post('/solicitudes')
        .send({
          area: 'RRHH',
          insumo: 'Insumo',
        })
        .expect('Content-Type', /json/)
        .expect(201, {})
        .end(async () => {
          assert.equal(await RepositorioSolicitudes.cantidad(), 1);

          done();
        })
    });
  });
});