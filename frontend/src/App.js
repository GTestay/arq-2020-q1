import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';
import './estilos/componentes.scss';

import Login from './componentes/login';
import ListadoUsuarios from './componentes/listadoUsuarios';
import RegistrarUsuario from './componentes/registrarUsuario';
import ListadoSolicitudes from './componentes/listadoSolicitudes';
import AgregarSolicitud from './componentes/agregarSolicitud';
import RutaAutenticada from './componentes/RutaAutenticada';

import UsuarioContext from './componentes/UsuarioContext';
import { guardarSession, obtenerSession } from './sesion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logueado: false, usuario: {} };
  }

  componentDidMount() {
    let usuario = obtenerSession();
    this.setState({ logueado: !!usuario, usuario });
  }

  ingresarUsuario = (usuario) => {
    guardarSession(usuario);
    this.setState({ usuario, logueado: !!usuario });
  };

  render() {
    return (
      <UsuarioContext.Provider
        value={{ ingresarUsuario: this.ingresarUsuario, ...this.state }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>

            <RutaAutenticada exact path="/usuarios"
                             component={ListadoUsuarios}/>
            <RutaAutenticada exact path="/usuarios/registrar"
                             component={RegistrarUsuario}/>

            <RutaAutenticada exact path="/solicitudes"
                             component={ListadoSolicitudes}/>
            <RutaAutenticada exact path="/solicitudes/agregar"
                             component={AgregarSolicitud}/>

            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </UsuarioContext.Provider>
    );
  }
}

export default App;
