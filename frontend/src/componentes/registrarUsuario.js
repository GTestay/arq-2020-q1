import React from 'react';
import axios from 'axios';

import '../estilos/componentes.scss'
import '../estilos/registro-usuario.scss'

class RegistarUsuario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          nombre: '',
          email: '',
          telefono: '',
          entidad: '',
          cargo: '',
          localidad: ''
        }
    }

    pasarAUsuarios = () => this.props.history.push('/', {});

    cambiarPropiedad = (propiedad, valor) => {
      this.setState({[propiedad]: valor})
    }

    guardarUsuario = event => {
      event.preventDefault();

      axios.post(`/usuarios`, {
        nombre: this.state.nombre,
        email: this.state.email,
        telefono: this.state.telefono,
        entidad: this.state.entidad,
        cargo: this.state.cargo,
        localidad: this.state.localidad,
      }).then(_ => {
        this.pasarAUsuarios();
      }).catch(console.log)
    }

    render () {
      return (
        <div>
          <div className="titulo">
            <h2>REGISTRO DE USUARIOS</h2>
            <div className="botones">
              <button className="boton secondary" onClick={this.pasarAUsuarios}>Atras</button>
            </div>
          </div>

          <form>
            <div className="form">
              <label> 
                Nombre
                <input required placeholder="ej.: David Correa" value={this.state.nombre} onChange={(event) => this.cambiarPropiedad('nombre', event.target.value)}/>
              </label>

              <label> 
                Email
                <input required placeholder="ej.: david@correa.com" value={this.state.email} onChange={(event) => this.cambiarPropiedad('email', event.target.value)}/>
              </label>

              <label> 
                Telefono
                <input required placeholder="ej.: 1500000000" value={this.state.telefono} onChange={(event) => this.cambiarPropiedad('telefono', event.target.value)}/>
              </label>

              <label> 
                Entidad
                <input required placeholder="ej.: Hospital Evita Pueblo" value={this.state.entidad} onChange={(event) => this.cambiarPropiedad('entidad', event.target.value)}/>
              </label>

              <label> 
                Cargo
                <input required placeholder="ej.: Cirujano" value={this.state.cargo} onChange={(event) => this.cambiarPropiedad('cargo', event.target.value)}/>
              </label>

              <label> 
                Localidad
                <input required placeholder="ej.: Berazategui" value={this.state.localidad} onChange={(event) => this.cambiarPropiedad('localidad', event.target.value)}/>
              </label>
            </div>

            <button className="boton primary" onClick={this.guardarUsuario}> Guardar </button>
          </form>
        </div>
      )
    } 
}

export default RegistarUsuario;