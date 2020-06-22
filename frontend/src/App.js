import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';
import './estilos/componentes.scss';

import Login from './componentes/login';
import ListadoUsuarios from './componentes/listadoUsuarios';
import RegistrarUsuario from './componentes/registrarUsuario';
import ListadoSolicitudes from './componentes/listadoSolicitudes';
import AgregarSolicitud from './componentes/agregarSolicitud';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>

                    <Route exact path="/usuarios" component={ListadoUsuarios}/>
                    <Route exact path="/usuarios/registrar" component={RegistrarUsuario}/>

                    <Route exact path="/solicitudes" component={ListadoSolicitudes}/>
                    <Route exact path="/solicitudes/agregar" component={AgregarSolicitud}/>

                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
