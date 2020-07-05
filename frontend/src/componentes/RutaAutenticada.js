import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import UsuarioContext from './UsuarioContext';

class RutaAutenticada extends React.Component {
  render() {
    return <UsuarioContext.Consumer>
      {contexto => {
        return !contexto.logueado ?
          <Redirect to="/"/> :
          <Route {...this.props}/>;
      }}
    </UsuarioContext.Consumer>;
  }
}

UsuarioContext.contextType = RutaAutenticada;

export default RutaAutenticada;