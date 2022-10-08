<template>
  <q-page padding>
    <div class="q-pa-md justify-center row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section vertical align="center" class="q-card q-card--bordered">
          <q-toolbar class="bg-primary text-white q-my-md shadow-2">
            <q-btn
              flat
              round
              dense
              icon="edit"
              label="Registro de Modulos"
              class="q-mr-sm"
            />
            <q-space />
            <q-btn-toggle
              v-model="model"
              flat
              stretch
              toggle-color="yellow"
              :options="options"
            /> </q-toolbar
        ></q-card-section>
        <q-form @submit.prevent="">
          <q-card-actions>
            <div class="row">
              <div class="contenido"></div>
              <div class="contenido"></div>
              <div class="contenido"></div>

              <div class="contenido"></div>
              <div class="contenido"></div>
              <div class="contenido"></div>
            </div>
          </q-card-actions>
          <q-separator /><q-card-actions align="center" class="q-px-md">
            <q-btn
              unelevated
              color="red"
              type="submit"
              size="sm"
              label="Guardar"
            />
            <q-btn unelevated color="primary" size="sm" label="Borrar" />
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<style>
.contenido {
  padding: 25px 1px 12px 25px;
  width: 300px;
}
.my-card {
  width: 120%;
  max-width: 100%;
}
</style>
<script>
//import Card from "./card.vue";
//import operation from "../../composable/index.js";

import { myLocale, tipoCurso } from "../../helper/helper";
import { ref } from "vue";
export default {
  components: {
    // Card,
  },
  setup() {
    const curso = ref("");
    let fechaInicio = ref(""),
      fechaFinal = ref();

    return {
      myLocale,
      curso,
      fechaInicio,
      fechaFinal,
      tipoCurso,
      model: ref("one"),

      options: [
        { label: "Consultar", value: "one" },
        { label: "Two", value: "two" },
        { label: "Three", value: "three" },
      ],
    };
  },
};
</script>
