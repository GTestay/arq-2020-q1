import axios from 'axios';

export default class Backend {
    static login(email) {
        return axios.post(`/login`, { email });
    }

    static cancelarSolicitud({ _id }) {
        return axios.patch(`/solicitudes/${_id}/cancelar`, {email: 'pepito@gmail.com'}).then(res => res.data);
    }

    static guardarSolicitud({ email, area, insumo }) {
        return axios.post(`/solicitudes`, { email, area, insumo });
    }
}