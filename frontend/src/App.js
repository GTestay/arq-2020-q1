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
import Usuario from './modelos/usuario';
import { obtenerSession, guardarSession, eliminarSession } from './sesion';

class App extends React.Component {
    
  constructor(props) {
    super(props);

    const sesion = obtenerSession();
    const estaLogueado = !!sesion;

    if(estaLogueado) {
      this.state = { estaLogueado, usuario: new Usuario(sesion.usuario) };
    } else {
      this.state = { estaLogueado: false, usuario: {} }; 
    }
  }

  iniciarSesion = (sesion) => {
    guardarSession(sesion);
    this.setState({ estaLogueado: true, usuario: new Usuario(sesion.usuario) });
  }

  cerrarSesion = () => {
    eliminarSession();
    this.setState({ estaLogueado: false, usuario: {} });
  }

  render() {
    return (
      <UsuarioContext.Provider value={{ iniciarSesion: this.iniciarSesion, cerrarSesion: this.cerrarSesion, ...this.state }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}/>

            <RutaAutenticada exact path="/usuarios"
                             component={ListadoUsuarios}/>
            <RutaAutenticada exact path="/usuarios/registrar"
                             component={RegistrarUsuario} soloAdministrador/>

            <RutaAutenticada exact path="/solicitudes"
                             component={ListadoSolicitudes}/>
            <RutaAutenticada exact path="/solicitudes/agregar"
                             component={AgregarSolicitud} soloAdministrador/>

            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </UsuarioContext.Provider>
    );
  }
}

export default App;
