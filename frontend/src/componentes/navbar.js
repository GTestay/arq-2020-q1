import React from 'react';

import '../estilos/componentes.scss';
import UsuarioContext from './UsuarioContext';
import { BotonConIcono } from './botonConIcono';

class Navbar extends React.Component {
  render() {
    return (
      <UsuarioContext.Consumer>
          {context => {
            return (
              <div className="navbar">  
                <h3>
                  Insumos Medicos
                </h3>
                <div className="usuario">
                  <span>
                    {context.usuario.email}
                  </span>
                  
                  <BotonConIcono onClick={context.cerrarSesion} texto="Salir" icono={'desloguear'}/>
                </div>
              </div>
            );
          }}
        </UsuarioContext.Consumer>
    );
  }
}

export default Navbar;