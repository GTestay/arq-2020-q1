import axios from 'axios'

export default class Backend {
    static login(email) {
        return axios.post(`/login`, { email })
    }
}