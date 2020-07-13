import React from 'react';

import '../estilos/componentes.scss';
import UsuarioContext from './UsuarioContext';

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
                    {context.email}
                  </span>
                  <svg onClick={context.cerrarSesion} id="i-signout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" />
                  </svg>
                </div>
              </div>
            );
          }}
        </UsuarioContext.Consumer>
    );
  }
}

export default Navbar;