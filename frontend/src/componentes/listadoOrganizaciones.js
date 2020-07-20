import React from 'react';

import '../estilos/componentes.scss';
import Backend from '../api/backendApi';
import Navbar from './navbar';

class ListadoOrganizaciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = { organizaciones: [] };
  }

  pasarASolicitudes = () => this.props.history.push('/solicitudes', {});

  pasarAUsuarios = () => this.props.history.push('/usuarios', {});

  componentDidMount() {
    Backend.organizaciones().then(({ data }) => {
      this.setState({ organizaciones: data });
    });
  }

  mostrarOrganizaciones() {
    return this.state.organizaciones.map((organizacion) => {
      return (
        <tr key={organizacion.email}>
          <td>
            {organizacion.nombre}
          </td>
          <td>
            {organizacion.email}
          </td>
          <td>
            {organizacion.telefono}
          </td>
          <td>
            {organizacion.localidad}
          </td>
          <td>
            {organizacion.insumos.join(', ')}
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
          <h2>ORGANIZACIONES</h2>
          <div className="botones">
            <button className="boton secondary"
                    onClick={this.pasarASolicitudes}> Solicitudes
            </button>
            <button className="boton secondary"
                    onClick={this.pasarAUsuarios}> Usuarios
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
              <th> Localidad</th>
              <th> Insumos</th>
            </tr>
            </thead>
            <tbody>
            {this.mostrarOrganizaciones()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListadoOrganizaciones;