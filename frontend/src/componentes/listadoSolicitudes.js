import React from 'react';

import '../estilos/componentes.scss';
import Backend from '../api/backendApi';
import Navbar from './navbar';
import UsuarioContext from './UsuarioContext';
import { AccionesDeSolicitudesHandler } from './accionesDeSolicitudesHandler';

export default class ListadoSolicitudes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { solicitudes: [] };
  }

  pasarAUsuarios = () => this.props.history.push('/usuarios', {});

  pasarAAgregar = () => this.props.history.push('/solicitudes/agregar', {});

  componentDidMount() {
    Backend.solicitudes().then(({ data }) => {
      this.setState({ solicitudes: data ?? [] });
    }).catch(() => this.setState({ solicitudes: [] }));
  }

  actualizarSolicitud = solicitudActualizada => {
    this.setState({
      solicitudes: this.state.solicitudes.map(
        solicitud => solicitud._id === solicitudActualizada._id
          ? solicitudActualizada
          : solicitud),
    });
  };

  mostrarSolicitudes() {
    return this.state.solicitudes.map((solicitud) => {
      return (
        <tr key={solicitud._id}>
          <td>
            {solicitud.email}
          </td>
          <td>
            {solicitud.insumo}
          </td>
          <td>
            {solicitud.area}
          </td>
          <td>
            {solicitud.estado}
          </td>
          <td>
            <UsuarioContext.Consumer>
              {context => {
                return <AccionesDeSolicitudesHandler
                  usuario={context.usuario}
                  solicitud={solicitud}
                  onUpdate={this.actualizarSolicitud}/>;
              }}
            </UsuarioContext.Consumer>
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
          <h2>SOLICITUDES</h2>
          <div className="botones">
            <button className="boton secondary"
                    onClick={this.pasarAUsuarios}> Usuarios
            </button>
            <button className="boton primary"
                    onClick={this.pasarAAgregar}>
              Agregar
            </button>
          </div>
        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th>Email solicitante</th>
              <th>Insumo</th>
              <th>Area</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {this.mostrarSolicitudes()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}