import React from 'react';

const UsuarioContext = React.createContext({ // valores defaults
    logueado: false,
    usuario: { token: '', email: '' },
    guardarUsuario: (usuario) => ({ usuario }),
  },
);

UsuarioContext.displayName = 'UsuarioContext';

export default UsuarioContext;