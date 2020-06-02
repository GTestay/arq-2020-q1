import React from 'react';

import '../estilos/componentes.scss'
import '../estilos/usuarios.scss'

class Usuarios extends React.Component {
    render () {
        return (
            <div>

                <div class="titulo">
                    <h2>USUARIOS</h2>
                    <button class="boton primary"> Registrar </button>
                </div>

                <div>
                    <table>
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
                    </table>
                </div>
            </div>
        );
    }
}

export default Usuarios;