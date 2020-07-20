import React, { useEffect } from 'react';
import backendApi from '../api/backendApi';
import Modal from 'react-modal';
import * as PropTypes from 'prop-types';
import { BotonConIcono } from './botonConIcono';
import styles from '../estilos/modal.module.scss';
import Select from 'react-select';

export function AdminBotonAprobarSolicitud({ solicitud, onUpdate }) {
  const [estadoModal, setModalEstado] = React.useState(false);
  const [proveedor, setProveedor] = React.useState(null);
  const [organizaciones, setOrganizaciones] = React.useState([]);

  useEffect(() => {
    backendApi.organizaciones()
      .then(({ data }) => data ?? [])
      .then((organizaciones) => setOrganizaciones(organizaciones.filter(
        organizacion => organizacion.insumos.includes(solicitud.insumo))));
  }, []);

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
        <div style={{ padding: '1em 1em 3em 1em' }}>
          <Select isDisable={organizaciones.length === 0} required
                  placeholder={'Ingrese un proveedor'}
                  getOptionValue={option => option}
                  getOptionLabel={option => option.nombre}
                  options={organizaciones}
                  onChange={(event) => setProveedor(event)}
          />
        </div>
        <div className="flex end">
          <button className="boton inverted" onClick={cerrarModal}>Cancelar
          </button>
          <button disabled={!proveedor} className="boton secondary"
                  onClick={aprobar}>Aprobar
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

AdminBotonAprobarSolicitud.propTypes = {
  solicitud: PropTypes.object,
  onUpdate: PropTypes.func,
};