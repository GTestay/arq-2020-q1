import * as PropTypes from 'prop-types';
import React from 'react';
import { AdminBotonRechazarSolicitud } from './adminBotonRechazarSolicitud';
import { AdminBotonAprobarSolicitud } from './adminBotonAprobarSolicitud';

export function AdminAccionPendiente(props) {
  return <div>
    <AdminBotonRechazarSolicitud solicitud={props.solicitud}
                                 onUpdate={props.onUpdate}/>
    <AdminBotonAprobarSolicitud solicitud={props.solicitud}
                                onUpdate={props.onUpdate}/>
  </div>;
}

AdminAccionPendiente.propTypes = {
  solicitud: PropTypes.any,
  onUpdate: PropTypes.any,
};