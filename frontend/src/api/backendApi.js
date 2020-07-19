import axios from 'axios';
import { obtenerSession } from '../sesion';

export default class Backend {
  static login(email) {
    return axios.post(`/login`, { email });
  }

  static _tokenUsuario() {
    const { usuario, token } = obtenerSession();
    const headers = { headers: { 'token-usuario': token } };

    return { usuario, headers };
  }

  static usuarios() {
    return axios.get('/usuarios', this._tokenUsuario().headers);
  }

  static crearUsuario(nuevoUsuario) {
    return axios.post(`/usuarios`, nuevoUsuario, this._tokenUsuario().headers);
  }

  static solicitudes() {
    return axios.get('/solicitudes', this._tokenUsuario().headers);
  }

  static cancelarSolicitud({ _id }) {
    const { usuario: { email }, headers } = this._tokenUsuario();

    return axios.patch(`/solicitudes/${_id}/cancelar`, { email }, headers).
      then(res => res.data);
  }

  static guardarSolicitud({ area, insumo }) {
    const { usuario: { email }, headers } = this._tokenUsuario();

    return axios.post(`/solicitudes`, { email, area, insumo }, headers);
  }

  static aprobarSolicitud({ _id }, proveedor) {
    const { usuario, headers } = this._tokenUsuario();

    return axios.patch(`/solicitudes/${_id}/aprobar`,
      { email: usuario.email , proveedor}, headers).then(res => res.data);
  }

  static rechazarSolicitud({ _id }, motivoDeRechazo) {
    const { usuario, headers } = this._tokenUsuario();

    return axios.patch(`/solicitudes/${_id}/rechazar`,
      { email: usuario.email, motivoDeRechazo }, headers).then(res => res.data);
  }
}