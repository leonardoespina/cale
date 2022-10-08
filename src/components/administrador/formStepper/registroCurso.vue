<template>
  <div class="q-pa-md justify-center row items-start q-gutter-md">
    <q-form @submit.prevent="">
      <q-card-actions>
        <div class="row">
          <div class="contenido">
            <q-input type="text" label="Stock" required />
          </div>
          <div class="contenido">
            <q-input type="text" label="Stock" required />
          </div>
          <div class="contenido"></div>

          <div class="contenido"></div>
          <div class="contenido"></div>
          <div class="contenido"></div>
        </div>
      </q-card-actions>
    </q-form>
  </div>
</template>

<script>
//import Card from "./card.vue";
//import operation from "../../composable/index.js";

import { myLocale, tipoCurso } from "../../../helper/helper";
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
    };
  },
};
</script>
<style>
.contenido {
  padding: 25px 1px 12px 25px;
  width: 200px;
}
</style>
