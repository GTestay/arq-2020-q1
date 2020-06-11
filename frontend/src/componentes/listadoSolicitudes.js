import React from 'react';
import axios from 'axios';

import '../estilos/componentes.scss'
import '../estilos/usuarios.scss'

export default class ListadoSolicitudes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {solicitudes: []};
  }

  componentDidMount() {
    axios.get('/solicitudes').then(({data}) => {
      this.setState({solicitudes: data})
    })
  }

  mostrarSolicitud() {
    return this.state.solicitudes.map((solicitud) => {
      return (
        <tr key={solicitud.id}>
          <td>
            {solicitud.insumo}
          </td>
          <td>
            {solicitud.area}
          </td>
          <td>
            {solicitud.estado}
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
        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th> Insumo</th>
              <th> Area</th>
              <th> Estado</th>
            </tr>
            </thead>
            <tbody>
            {this.mostrarSolicitud()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}