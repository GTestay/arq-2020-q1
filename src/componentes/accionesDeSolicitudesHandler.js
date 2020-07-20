import * as PropTypes from 'prop-types';
import React from 'react';
import { SolicitudAccionPendiente } from './solicitudAccionPendiente';

export function AccionesDeSolicitudesHandler({ solicitud, ...props }) {
  switch(solicitud.estado) {
    case 'PENDIENTE':
      return <SolicitudAccionPendiente solicitud={solicitud} {...props} />;
    case 'DESAPROBADA':
      return null;// poner una crucesita
    case 'CANCELADA':
      return null; // poner una crucesita
    case 'APROBADA':
      return null; // poner un check
    default:
      return null;
  }
}

AccionesDeSolicitudesHandler.propTypes = {
  solicitud: PropTypes.any,
  onClick: PropTypes.func,
};