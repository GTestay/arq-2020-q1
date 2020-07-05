import axios from 'axios';
import { obtenerSession } from '../sesion';

export default class Backend {
  static login(email) {
    return axios.post(`/login`, { email });
  }

  static _tokenUsuario() {
    const usuario = obtenerSession();
    const headers = { headers: { 'token-usuario': usuario.token } };
    return { usuario, headers };
  }

  static usuarios() {
    return axios.get('/usuarios', this._tokenUsuario().headers);
  }

  static crearUsuario(nuevoUsuario) {
    return axios.post(`/usuarios`,nuevoUsuario , this._tokenUsuario().headers);
  }

  static solicitudes() {
    return axios.get('/solicitudes', this._tokenUsuario().headers);
  }

  static cancelarSolicitud({ _id }) {
    let { usuario, headers } = this._tokenUsuario();

    return axios.patch(`/solicitudes/${_id}/cancelar`,
      { email: usuario.email }, headers).then(res => res.data);
  }

  static guardarSolicitud({ email, area, insumo }) {
    return axios.post(`/solicitudes`, { email, area, insumo },
      this._tokenUsuario().headers);
  }
}