import React from 'react';
import backendApi from '../api/backendApi';
import Modal from 'react-modal';
import * as PropTypes from 'prop-types';
import { BotonConIcono } from './botonConIcono';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function AdminBotonRechazarSolicitud({ solicitud, onUpdate }) {
  const [estadoModal, setModalEstado] = React.useState(false);
  const [motivoDeRechazo, setMotivoDeRechazo] = React.useState('');

  function abrirModal() {
    setModalEstado(true);
  }

  function cerrarModal() {
    setModalEstado(false);
    setMotivoDeRechazo('');
  }

  function rechazar(e) {
    e.preventDefault();
    backendApi.rechazarSolicitud(solicitud, motivoDeRechazo).then(onUpdate);
    cerrarModal();
  }

  return (
    <React.Fragment>
      <BotonConIcono onClick={abrirModal} texto="Rechazar" icono={'rechazar'}/>
      
      <Modal
        isOpen={estadoModal}
        onRequestClose={setModalEstado}
        contentLabel="Rechazar solicitud"
        style={customStyles}
      >
        <h2>Rechazar solicitud de {solicitud.email}</h2>
        <div>
          <label>
            Motivo de rechazo
            <input required placeholder="Escriba el motivo..."
                  value={motivoDeRechazo}
                  onChange={(event) => setMotivoDeRechazo(event.target.value)}/>
          </label>
          <div>
            <button onClick={rechazar}>Rechazar</button>
            <button onClick={cerrarModal}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

AdminBotonRechazarSolicitud.propTypes = {
  solicitud: PropTypes.object,
  onUpdate: PropTypes.func,
};