import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Usuarios from './componentes/usuarios';
import RegistrarUsuario from './componentes/registrarUsuario';
import ListadoSolicitudes from './componentes/listadoSolicitudes';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Usuarios} />
        <Route exact path="/solicitudes" component={ListadoSolicitudes} />
        <Route exact path="/registrar-usuario" component={RegistrarUsuario} />
      </BrowserRouter>
    );
  }
}

export default App;
