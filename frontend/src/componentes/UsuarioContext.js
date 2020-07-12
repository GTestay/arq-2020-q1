import React from 'react';

// Valores default.
const UsuarioContext = React.createContext({ 
    logueado: false,
    usuario: { token: '', email: '' },
    guardarUsuario: (usuario) => ({ usuario }),
  },
);

UsuarioContext.displayName = 'UsuarioContext';

export default UsuarioContext;