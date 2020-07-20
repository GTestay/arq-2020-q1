import React from 'react';
import backendApi from '../api/backendApi';
import Modal from 'react-modal';
import * as PropTypes from 'prop-types';
import { BotonConIcono } from './botonConIcono';
import styles from '../estilos/modal.module.scss';

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
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>
          <h2>Escriba su motivo de rechazo para {solicitud.email}</h2>
        </div>
        
        <div style={{ display: 'flex', padding: '1em 1em 3em 1em' }}>
          <input required placeholder="Motivo..."
                value={motivoDeRechazo}
                onChange={(event) => setMotivoDeRechazo(event.target.value)}
                style={{ width: '100%' }}/>
        </div>
        <div className="flex end">
          <button className="boton inverted" onClick={cerrarModal}>Cancelar</button>
          <button className="boton secondary" onClick={rechazar}>Rechazar</button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

AdminBotonRechazarSolicitud.propTypes = {
  solicitud: PropTypes.object,
  onUpdate: PropTypes.func,
};