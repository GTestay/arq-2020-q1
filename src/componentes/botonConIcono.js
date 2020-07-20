import React from "react";

export function BotonConIcono({ texto = 'Hello', onClick = Function.prototype, icono }) {
  const contenidoIcono = (icono) => {
    switch(icono) {
      case 'aprobar':
        return (
          <React.Fragment>
            <path d="M2 20 L12 28 30 4" />
          </React.Fragment>
        );
      case 'rechazar':
        return (
          <React.Fragment>
            <circle cx="16" cy="16" r="14" />
            <path d="M6 6 L26 26" />
          </React.Fragment>
        );
      case 'cancelar':
        return (
          <React.Fragment>
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </React.Fragment>
        );  
      case 'desloguear':
        return (
          <React.Fragment>
            <path d="M28 16 L8 16 M20 8 L28 16 20 24 M11 28 L3 28 3 4 11 4" />
          </React.Fragment>
        );
      default:
        return null;
    }
  };

  return (
    <button className="boton secondary con-icono" onClick={onClick}> 
      <svg id={`i-${icono}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        { contenidoIcono(icono) }
      </svg>
      <span>
        { texto }
      </span>
    </button>
  )
}