import React from 'react';
import backendApi from '../api/backendApi';
import Modal from 'react-modal';
import * as PropTypes from 'prop-types';
import { BotonConIcono } from './botonConIcono';
import styles from '../estilos/modal.module.scss';

export function AdminBotonAprobarSolicitud({ solicitud, onUpdate }) {
  const [estadoModal, setModalEstado] = React.useState(false);
  const [proveedor, setProveedor] = React.useState('');

  function abrirModal() {
    setModalEstado(true);
  }

  function cerrarModal() {
    setModalEstado(false);
    setProveedor('');
  }

  function aprobar(e) {
    e.preventDefault();
    backendApi.aprobarSolicitud(solicitud, proveedor).then(onUpdate);
    cerrarModal();
  }

  return (
    <React.Fragment>
      <BotonConIcono onClick={abrirModal} texto="Aprobar" icono={'aprobar'}/>
      
      <Modal
        isOpen={estadoModal}
        onRequestClose={setModalEstado}
        contentLabel="Aprobar solicitud"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>
          <h2>Elija un proveedor para {solicitud.email}</h2>
        </div>
        
        <div style={{ display: 'flex', padding: '1em 1em 3em 1em' }}>
          <input required placeholder="Nombre del proveedor..."
                value={proveedor}
                onChange={(event) => setProveedor(event.target.value)}
                style={{ width: '100%' }}/>
        </div>
        <div className="flex end">
          <button className="boton inverted" onClick={cerrarModal}>Cancelar</button>
          <button className="boton secondary" onClick={aprobar}>Aprobar</button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

AdminBotonAprobarSolicitud.propTypes = {
  solicitud: PropTypes.object,
  onUpdate: PropTypes.func,
};