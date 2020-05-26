<template>
  <div id="app">
    <InsumosMedicosInicio/>
  </div>
</template>

<script>
  import InsumosMedicosInicio from './components/InsumosMedicosInicio.vue'

  export default {
    name: 'InsumosMedicosApp',
    components: {
      InsumosMedicosInicio
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
