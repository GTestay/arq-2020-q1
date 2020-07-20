import React from 'react';

export function EstadoSolicitud({ estado }) {
  const clasesSegunEstado = {
    'PENDIENTE': 'pendiente',
    'DESAPROBADA': 'desaprobada',
    'CANCELADA': 'cancelada',
    'APROBADA': 'aprobada',
  };

  return (
    <div className="estado-solicitud">
      <div className={`estado-solicitud ${clasesSegunEstado[estado]}`}/>
      <span>
        {estado}
      </span>
    </div>
  )
}