import React from 'react';

import '../estilos/componentes.scss'
import '../estilos/usuarios.scss'

class Usuarios extends React.Component {
    pasarARegistrar = () => this.props.history.push('/registrar-usuario', {});

    render () {
        return (
            <div>

                <div className="titulo">
                    <h2>USUARIOS</h2>
                    <button className="boton primary" onClick={this.pasarARegistrar}> Registrar </button>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                              <th>
                                Nombre
                              </th>
                              <th>
                                Email
                              </th>
                              <th>
                                Telefono
                              </th>
                              <th>
                                Entidad
                              </th>
                              <th>
                                Cargo
                              </th>
                              <th>
                                Localidad
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>
                                Usuario Nombre
                              </td>
                              <td>
                                Usuario Email
                              </td>
                              <td>
                                Usuario Telefono
                              </td>
                              <td>
                                Usuario Entidad
                              </td>
                              <td>
                                Usuario Cargo
                              </td>
                              <td>
                                Usuario Localidad
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Usuarios;