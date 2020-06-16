import React from 'react';

import '../estilos/login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: '' }
    }

    cambiarPropiedad = (propiedad, valor) => {
        this.setState({[propiedad]: valor})
    }

    render() {
        return (
            <div className="login">
                <div className="titulo">
                    <h2>INSUMOS MEDICOS</h2>
                </div>

                <form className="form-login">
                    <div className="form">
                        <label> 
                            Ingrese su email:
                            <input required placeholder="ej.: gastonT@gmail.com" value={this.state.email} onChange={(event) => this.cambiarPropiedad('email', event.target.value)}/>
                        </label>
                    </div>

                    <button className="boton primary" onClick={this.ingresar}> Ingresar </button>
                </form>
            </div>
        )
    }
}

export default Login;