import React from 'react';

import '../estilos/componentes.scss'
import '../estilos/registro-usuario.scss'

class RegistarUsuario extends React.Component {
    pasarAUsuarios = () => this.props.history.push('/', {});

    render () {
        return (
            <div>
                <div className="titulo">
                    <h2>REGISTRO DE USUARIOS</h2>
                    <div className="botones">
                        <button className="boton secondary" onClick={this.pasarAUsuarios}>Atras</button>
                    </div>
                </div>

                <section>
                    <div className="form">
                        <label> Nombre
                            <input required placeholder="ej.: David Correa"/>
                        </label>

                        <label> Email
                            <input required placeholder="ej.: david@correa.com"/>
                        </label>

                        <label> Telefono
                            <input required placeholder="ej.: 1500000000"/>
                        </label>

                        <label> Entidad
                            <input required placeholder="ej.: Hospital Evita Pueblo"/>
                        </label>

                        <label> Cargo
                            <input required placeholder="ej.: Cirujano"/>
                        </label>

                        <label> Localidad
                            <input required placeholder="ej.: Berazategui"/>
                        </label>
                    </div>
                    <button className="boton primary"> Guardar </button>
                </section>
            </div>
        )
    }
}

export default RegistarUsuario;