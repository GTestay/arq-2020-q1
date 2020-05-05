const request = require('supertest');
const assert = require('assert')

const App = require('../src/app');
const Usuario = require('../src/modelos/usuario');
const RepositorioUsuarios = require('../src/repositorios/repositorioUsuarios');

describe('/usuarios', () => {
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

    it('obtiene todos los usuarios', (done) => {
      request(App)
        .get('/usuarios')
        .expect('Content-Type', /json/)
        .expect(200, [{ 
          nombre: 'Natalia Natalia',
          email: 'natalia@unknown.com',
          telefono: '1500000000',
          entidad: 'Hospital de desconocidos',
          cargo: 'Administrativo',
          localidad: 'Varela'
        }], done)
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
        .end(function() {
          assert.equal(RepositorioUsuarios.cantidad(), 1);
          done();
        })
    });
  });
});