import React from 'react';
import axios from 'axios';

import '../estilos/componentes.scss'
import '../estilos/usuarios.scss'
import backendApi from '../api/backendApi';

export default class ListadoSolicitudes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {solicitudes: []};
  }

  pasarAUsuarios = () => this.props.history.push('/usuarios', {});

  pasarAAgregar = () => this.props.history.push('/solicitudes/agregar', {});

  componentDidMount() {
    axios.get('/solicitudes').then(({data}) => {
      this.setState({solicitudes: data})
    })
  }

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
                {solicitud.estado === 'CANCELADA' ? null :
                    <button className="boton inverted"
                    onClick={(e) => this.cancelar(e,
                        solicitud)}>Cancelar</button>}
            </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="titulo">
          <h2>SOLICITUDES</h2>
          <div class="botones">
            <button className="boton secondary" onClick={this.pasarAUsuarios}> Usuarios </button>
            <button className="boton primary" onClick={this.pasarAAgregar}> Agregar </button>
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
    cancelar = (e, solicitud) => {
        e.preventDefault();
        backendApi.cancelarSolicitud(solicitud).then(this.actualizarSolicitud);
    };

    actualizarSolicitud = solicitudActualizada => {
        this.setState({
            solicitudes: this.state.solicitudes.map(
                solicitud => solicitud._id === solicitudActualizada._id
                    ? solicitudActualizada
                    : solicitud),
        });
    };
}