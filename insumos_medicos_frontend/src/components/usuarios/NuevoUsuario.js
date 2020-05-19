import estilo from './nuevo-usuario.css'

import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';

import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

const NuevoUsuario = () => (
    <div class={estilo.titulo}>
        <h1>Nuevo Usuario</h1>
        <p>Para crear un nuevo usuario utilizamos el siguiente formulario: </p>

        <div class={estilo.formulario}>
            <TextField required outlined label="Nombre" />
            <TextField required type="email" outlined label="Email" />
            <TextField required outlined label="Telefono" />
            <TextField outlined label="Entidad" />
            <TextField outlined label="Cargo" />
            <TextField outlined label="Localidad" />
            <Button raised class={estilo.boton}> Cargar </Button>
        </div>
    </div>
);

export default NuevoUsuario;
