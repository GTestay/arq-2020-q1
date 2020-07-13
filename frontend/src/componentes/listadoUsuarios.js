import React from 'react';

import '../estilos/componentes.scss';
import Backend from '../api/backendApi';
import Navbar from './navbar';

class ListadoUsuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuarios: [] };
  }

  pasarASolicitudes = () => this.props.history.push('/solicitudes', {});

  pasarARegistrar = () => this.props.history.push('/usuarios/registrar', {});

  componentDidMount() {
    Backend.usuarios().then(({ data }) => {
      this.setState({ usuarios: data });
    });
  }

  mostrarUsuarios() {
    return this.state.usuarios.map((usuario) => {
      return (
        <tr key={usuario.email}>
          <td>
            {usuario.nombre}
          </td>
          <td>
            {usuario.email}
          </td>
          <td>
            {usuario.telefono}
          </td>
          <td>
            {usuario.entidad}
          </td>
          <td>
            {usuario.cargo}
          </td>
          <td>
            {usuario.localidad}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="titulo">
          <h2>USUARIOS</h2>
          <div className="botones">
            <button className="boton secondary"
                    onClick={this.pasarASolicitudes}> Solicitudes
            </button>
            <button className="boton primary"
                    onClick={this.pasarARegistrar}> Registrar
            </button>
          </div>
        </div>

        <div>
          <table>
            <thead>
            <tr>
              <th> Nombre</th>
              <th> Email</th>
              <th> Telefono</th>
              <th> Entidad</th>
              <th> Cargo</th>
              <th> Localidad</th>
            </tr>
            </thead>
            <tbody>
            {this.mostrarUsuarios()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListadoUsuarios;