import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Usuarios from './componentes/usuarios';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Usuarios } />
      </BrowserRouter>
    );
  }
}

export default App;
