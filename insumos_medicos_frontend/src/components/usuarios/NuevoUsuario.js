import estilo from './nuevo-usuario.css'

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

import redaxios from 'redaxios';
import {Component} from "preact";

class NuevoUsuario extends Component {
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

    crearNuevoUsuario = event => {
        event.preventDefault();

        redaxios.post(`http://localhost:8000/usuarios/nuevo_usuario`,
            {
                nombre: this.state.nombre,
                email: this.state.email,
                telefono: this.state.telefono,
                entidad: this.state.entidad,
                cargo: this.state.cargo,
                localidad: this.state.localidad,
            }).then(response => {
                console.log('Usuario creado correctamente!')
        }).catch(console.log)
    }

    cambiarPropiedad = (propiedad, valor) => {
        this.setState({[propiedad]: valor})
    }

    render() {
        return (
            <div className={estilo.titulo}>
                <h1>Nuevo Usuario</h1>
                <p>Para crear un nuevo usuario utilizamos el siguiente formulario: </p>

                <form className={estilo.formulario} onSubmit={this.crearNuevoUsuario}>
                    <TextField required outlined label="Nombre" value={this.state.nombre} onChange={(event) => this.cambiarPropiedad('nombre', event.target.value)}/>
                    <TextField required type="email" outlined label="Email" value={this.state.email} onChange={(event) => this.cambiarPropiedad('email', event.target.value)}/>
                    <TextField required outlined label="Telefono" value={this.state.telefono} onChange={(event) => this.cambiarPropiedad('telefono', event.target.value)}/>
                    <TextField outlined label="Entidad" value={this.state.entidad} onChange={(event) => this.cambiarPropiedad('entidad', event.target.value)}/>
                    <TextField outlined label="Cargo" value={this.state.cargo} onChange={(event) => this.cambiarPropiedad('cargo', event.target.value)}/>
                    <TextField outlined label="Localidad" value={this.state.localidad} onChange={(event) => this.cambiarPropiedad('localidad', event.target.value)}/>
                    <Button raised class={estilo.boton}> Cargar </Button>
                </form>
            </div>
        )
    }
}

export default NuevoUsuario;
