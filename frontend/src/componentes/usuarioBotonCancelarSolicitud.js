import * as PropTypes from "prop-types";
import React from "react";
import backendApi from "../api/backendApi";

export function UsuarioBotonCancelarSolicitud({solicitud, onUpdate}) {

  function cancelar(e) {
    e.preventDefault();
    backendApi.cancelarSolicitud(solicitud).then(onUpdate);
  }

  return <button className="boton inverted" onClick={cancelar}>Cancelar</button>;
}

UsuarioBotonCancelarSolicitud.propTypes = {onUpdate: PropTypes.func, solicitud: PropTypes.object};