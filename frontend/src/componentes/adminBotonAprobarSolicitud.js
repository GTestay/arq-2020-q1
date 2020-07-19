import React from 'react';
import backendApi from '../api/backendApi';
import Modal from 'react-modal';
import * as PropTypes from 'prop-types';

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

  return <div>
    <button className="boton inverted" onClick={abrirModal}>Aprobar</button>
    <Modal
      isOpen={estadoModal}
      onRequestClose={setModalEstado}
      contentLabel="Aprobar solicitud"
      style={customStyles}
    >
      <h2>Aprobar solicitud de {solicitud.email}</h2>
      <div>
        <label>
          Elija un Proveedor
          <input required placeholder="Nombre del proveedor..."
                 value={proveedor}
                 onChange={(event) => setProveedor(event.target.value)}/>
        </label>
        <div>
          <button onClick={aprobar}>Aprobar</button>
          <button onClick={cerrarModal}>Cancelar</button>
        </div>
      </div>
    </Modal>
  </div>;
}

AdminBotonAprobarSolicitud.propTypes = {
  solicitud: PropTypes.object,
  onUpdate: PropTypes.func,
};