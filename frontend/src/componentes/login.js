import React from 'react'

import Backend from '../api/backendApi';
import styles from '../estilos/login.module.scss';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            falloAlLoguear: false,
        }
    }

    cambiarPropiedad = (propiedad, valor) => {
        this.setState({ [propiedad]: valor })
    }

    ingresar = (e) => {
        e.preventDefault()
        Backend.login(this.state.email).then(( req) => {
            this.props.history.push('/usuarios', { usuario: req.data })
        }).catch(e => this.cambiarPropiedad('falloAlLoguear', e))
    }

    render() {
        return (
            <div className={styles.login}>
                <div className={styles.titulo}>
                    <h2>INSUMOS MEDICOS</h2>
                </div>

                <form className={styles.form} onSubmit={this.ingresar}>
                    <div className="input-group 1-col">
                        <label>
                            Ingrese su email:
                            <input required placeholder="ej.: gastonT@gmail.com"
                                   value={this.state.email}
                                   onChange={(event) => this.cambiarPropiedad(
                                       'email', event.target.value)}/>
                        </label>
                    </div>
                    <p>{this.state.falloAlLoguear
                        ? 'Ups! ocurrió un error'
                        : null}</p>
                    <button className="boton primary"> Ingresar</button>
                </form>
            </div>
        )
    }
}

export default Login