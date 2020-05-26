<template>
  <div>
    {{ usuario.nombre }}
    {{ usuario.telefono }}
    {{ usuario.email }}
    {{ usuario.localidad }}
    {{ usuario.cargo }}
    {{ usuario.entidad }}
  </div>
</template>

<script>
  export default {
    name: 'DescripcionDeUsuario',
    props: ['usuario']
  }
</script>
