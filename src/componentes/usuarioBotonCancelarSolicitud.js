import * as PropTypes from "prop-types";
import React from "react";
import backendApi from "../api/backendApi";
import { BotonConIcono } from './botonConIcono';

export function UsuarioBotonCancelarSolicitud({solicitud, onUpdate}) {

  function cancelar(e) {
    e.preventDefault();
    backendApi.cancelarSolicitud(solicitud).then(onUpdate);
  }

  return <BotonConIcono onClick={cancelar} texto="Cancelar" icono={'cancelar'} size={25}/>;
}

UsuarioBotonCancelarSolicitud.propTypes = {onUpdate: PropTypes.func, solicitud: PropTypes.object};