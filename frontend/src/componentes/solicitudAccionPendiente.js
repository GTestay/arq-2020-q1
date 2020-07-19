import { UsuarioBotonCancelarSolicitud } from './usuarioBotonCancelarSolicitud';
import React from 'react';
import * as PropTypes from 'prop-types';
import { AdminAccionPendiente } from './adminAccionPendiente';

export function SolicitudAccionPendiente({ usuario, solicitud, onUpdate }) {
  if(solicitud.email === usuario.email)
    return <UsuarioBotonCancelarSolicitud solicitud={solicitud} onUpdate={onUpdate}/>;

  if(usuario.esAdministrador()) {
    return <AdminAccionPendiente solicitud={solicitud} onUpdate={onUpdate}/>;
  } else {
    return null;
  }
}

SolicitudAccionPendiente.propTypes = {
  usuario: PropTypes.object,
  solicitud: PropTypes.object,
  onUpdate: PropTypes.func,
};