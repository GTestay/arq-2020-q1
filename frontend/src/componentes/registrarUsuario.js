import React from 'react';

import '../estilos/componentes.scss';
import Backend from '../api/backendApi';
import Navbar from './navbar';

class RegistarUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      email: '',
      telefono: '',
      entidad: '',
      cargo: '',
      localidad: '',
      rol: 'solicitante',
    };
  }

  pasarAUsuarios = () => this.props.history.push('/usuarios', {});

  cambiarPropiedad = (propiedad, valor) => {
    this.setState({ [propiedad]: valor });
  };

  guardarUsuario = event => {
    event.preventDefault();
    Backend.crearUsuario({
      nombre: this.state.nombre,
      email: this.state.email,
      telefono: this.state.telefono,
      entidad: this.state.entidad,
      cargo: this.state.cargo,
      localidad: this.state.localidad,
      rol: this.state.rol,
    }).then(_ => {
      this.pasarAUsuarios();
    }).catch(console.log);
  };

  render() {
    return (
      <div>
        <Navbar/>
        <div className="titulo">
          <h2>REGISTRO DE USUARIOS</h2>
          <div className="botones">
            <button className="boton secondary"
                    onClick={this.pasarAUsuarios}>Atras
            </button>
          </div>
        </div>

        <form>
          <div className="input-group col-4">
            <label>
              Nombre
              <input required placeholder="ej.: David Correa"
                     value={this.state.nombre}
                     onChange={(event) => this.cambiarPropiedad('nombre',
                       event.target.value)}/>
            </label>

            <label>
              Email
              <input required placeholder="ej.: david@correa.com"
                     value={this.state.email}
                     onChange={(event) => this.cambiarPropiedad('email',
                       event.target.value)}/>
            </label>

            <label>
              Telefono
              <input required placeholder="ej.: 1500000000"
                     value={this.state.telefono}
                     onChange={(event) => this.cambiarPropiedad('telefono',
                       event.target.value)}/>
            </label>

            <label>
              Entidad
              <input required placeholder="ej.: Hospital Evita Pueblo"
                     value={this.state.entidad}
                     onChange={(event) => this.cambiarPropiedad('entidad',
                       event.target.value)}/>
            </label>

            <label>
              Cargo
              <input required placeholder="ej.: Cirujano"
                     value={this.state.cargo}
                     onChange={(event) => this.cambiarPropiedad('cargo',
                       event.target.value)}/>
            </label>

            <label>
              Localidad
              <input required placeholder="ej.: Berazategui"
                     value={this.state.localidad}
                     onChange={(event) => this.cambiarPropiedad('localidad',
                       event.target.value)}/>
            </label>

            <label>
              Rol
              <select value={this.state.rol} onChange={(event) => this.cambiarPropiedad('rol', event.target.value)}>
                <option value="solicitante">Solicitante</option>
                <option value="administrador">Administrador</option>
              </select>
            </label>
          </div>

          <button className="boton primary"
                  onClick={this.guardarUsuario}> Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default RegistarUsuario;