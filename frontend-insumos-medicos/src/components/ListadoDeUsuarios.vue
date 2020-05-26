<template>
  <div>
    <h1>Listado de usuarios</h1>
    <div :key="usuario.id" class="columns medium-3" v-for="usuario in usuarios">
      <div class="card">
        <div class="card-divider">
          <descripcion-de-usuario v-bind:usuario="usuario"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DescripcionDeUsuario from './DescripcionDeUsuario'
  import { traerUsuarios } from '../lib/Backend'

  export default {
    name: 'ListadoDeUsuarios',
    components: { DescripcionDeUsuario },
    data () {
      return {
        usuarios: [],
      }
    },
    created: function () {
      traerUsuarios()
        .then(res => {
          this.usuarios = res.data
        })
    }
  }
</script>
