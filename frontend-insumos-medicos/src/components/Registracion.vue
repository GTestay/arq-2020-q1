<template>
  <div>
    <form id="loginForm" @submit.prevent="post" class="col-7 mx-auto">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Registración</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="nombre">Nombre</label>
                <md-input name="nombre" id="nombre" autocomplete="nombre" v-model="form.nombre"/>
                <!--                <span class="md-error" v-if="!nombre.required">El nombre es requerido</span>-->
                <!--                <span class="md-error" v-else-if="!!nombre">Nombre inválido</span>-->
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="email">Email</label>
                <md-input name="email" id="email" autocomplete="email" v-model="form.email"/>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="telefono">Telefono</label>
                <md-input name="telefono" id="telefono" autocomplete="telefono" v-model="form.telefono"/>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="localidad">Localidad</label>
                <md-input name="localidad" id="localidad" autocomplete="localidad" v-model="form.localidad"/>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="entidad">Entidad</label>
                <md-input name="entidad" id="entidad" autocomplete="entidad" v-model="form.entidad"/>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="cargo">Cargo</label>
                <md-input name="cargo" id="cargo" autocomplete="cargo" v-model="form.cargo"/>
              </md-field>
            </div>
          </div>

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">¡Enviar!</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <div>
      {{JSON.stringify(this.form)}}
    </div>
  </div>
</template>


<script>
  const apiUrl = 'localhost:8080/api'
  const apiEndPoint = apiUrl + '/usuarios'
  import { crearUsuario } from '../lib/Backend'

  export default {
    name: 'Registracion',
    data: () => ({
      sending: false,
      form: {
        nombre: null,
        email: null,
        telefono: null,
        localidad: null,
        entidad: null,
        cargo: null
      }
    }),
    methods: {
      post: function () {
        console.log(apiEndPoint)
        console.log(this.form)
        crearUsuario(this.form).then(console.log)
      }
    }
  }
</script>

