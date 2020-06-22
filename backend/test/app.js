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

          assert.strictEqual(usuario.nombre, 'Natalia Natalia');
          assert.strictEqual(usuario.email, 'natalia@unknown.com');
          assert.strictEqual(usuario.telefono, '1500000000');
          assert.strictEqual(usuario.entidad, 'Hospital de desconocidos');
          assert.strictEqual(usuario.cargo, 'Administrativo');
          assert.strictEqual(usuario.localidad, 'Varela');

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
          assert.strictEqual(await RepositorioUsuarios.cantidad(), 1);

          done();
        })
    });
  });
});

describe('login', () => {

  describe('POST', () => {
    const unUsuario = new Usuario({
      nombre: 'Natalia Natalia',
      email: 'natalia@unknown.com',
      telefono: '42549877',
      entidad: 'Hospital de desconocidos',
      cargo: 'Administrativo',
      localidad: 'Varela'
    });

    beforeEach(() => {
      RepositorioUsuarios.agregar(unUsuario)
    });

    it('obtiene al usuario con ese email', (done) => {
      request(App)
        .post('/login')
        .send({email: unUsuario.email})
        .expect('Content-Type', /json/)
        .expect(200)
        .end((_, response) =>{
          const usuarioLogueado = new Usuario(response.body);
          assert.notStrictEqual(usuarioLogueado, unUsuario)
          done();
      })
    });
  });
});

describe('/solicitud', () => {
  describe('GET', () => {
    beforeEach(() => {
      RepositorioSolicitudes.nueva(
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

          assert.strictEqual(solicitud.area, 'RRHH');
          assert.strictEqual(solicitud.insumo, 'Insumo');

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
          assert.strictEqual(await RepositorioSolicitudes.cantidad(), 1);

          done();
        })
    });
  });

});

describe('/solicitud/:id/cancelar', () => {
  describe('PATCH', () => {
    const email = 'pepe@gmail.com';
    const solicitud = new Solicitud({email ,area:'RRHH', insumo:'Barbijos'});
    let cascas = { }
    beforeEach(async ()=>{
      cascas = await RepositorioSolicitudes.nueva(solicitud)
    })

    it('Se puede cancelar una solicitud, cuando pertenece al usuario que la solicita', (done) => {
        request(App).
            patch(`/solicitudes/${cascas._id}/cancelar`).
            send({ email })
            .end( (_, {body})=> {
              assert.strictEqual(body.estado, Solicitud.ESTADOS.CANCELADA);
              done();
            });
    });
  });
});
