import React from 'react';

import backendApi from '../api/backendApi';
import '../estilos/componentes.scss';

class AgregarSolicitud extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          area: 'Atención de pacientes',
          insumo: 'Máscaras protectoras'
        }
    }

    pasarAListadoSolicitudes = () => this.props.history.push('/solicitudes', {});

    cambiarPropiedad = (propiedad, valor) => {
      this.setState({[propiedad]: valor})
    }

    guardarSolicitud = event => {
      event.preventDefault();
        backendApi.guardarSolicitud(this.state).then(_ => {
        this.pasarAListadoSolicitudes();
      }).catch(console.log)
    }

    render () {
      return (
        <div>
          <div className="titulo">
            <h2>ALTA DE SOLICITUD</h2>
            <div className="botones">
              <button className="boton secondary" onClick={this.pasarAListadoSolicitudes}>Atras</button>
            </div>
          </div>

          <form>
            <div className="input-group col-2">
              <label> 
                Insumo
                <select value={this.state.insumo} onChange={(event) => this.cambiarPropiedad('insumo', event.target.value)}>
                  <option value="Máscaras protectoras">Máscaras protectoras</option>
                  <option value="Barbijos">Barbijos</option>
                  <option value="Respiradores">Respiradores</option>
                  <option value="Guantes">Guantes</option>
                  <option value="Medicamentos">Medicamentos</option>
                </select>
              </label>

              <label> 
                Area
                <select value={this.state.area} onChange={(event) => this.cambiarPropiedad('area', event.target.value)}>
                  <option value="Atención de pacientes">Atención de pacientes</option>
                  <option value="Terapia Intensiva">Terapia Intensiva</option>
                  <option value="Técnicos">Técnicos</option>
                </select>
              </label>
            </div>

            <button className="boton primary" onClick={this.guardarSolicitud}> Guardar </button>
          </form>
        </div>
      )
    } 
}

export default AgregarSolicitud;