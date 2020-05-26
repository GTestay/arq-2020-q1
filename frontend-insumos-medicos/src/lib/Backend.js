import axios from 'axios'

export function traerUsuarios () {
  return axios
    .get('/api/usuarios')
}

export function crearUsuario (jsonBody) {
  let data = JSON.stringify(jsonBody)
  return axios
    .post('/api/usuarios', data, {
      headers: { 'content-type': 'application/json' }
    })
}
