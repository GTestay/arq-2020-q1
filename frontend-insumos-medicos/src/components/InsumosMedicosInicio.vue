<template>
  <div class="hello">
    <h1>Insumos Médicos</h1>
    <p>
      Para registrarte haz click
      <a href="/registracion" rel="noopener" target="_blank">aquí</a>.
    </p>
    <listado-de-usuarios/>

    <registracion/>
  </div>
</template>

<script>
  import ListadoDeUsuarios from './ListadoDeUsuarios'
  import Registracion from './Registracion'

  export default {
    name: 'InsumosMedicosInicio',
    components: { Registracion, ListadoDeUsuarios },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
