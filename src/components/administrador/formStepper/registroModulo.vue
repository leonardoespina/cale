<template>
  <div class="q-pa-md justify-left row items-start q-gutter-md">
    <q-form @submit.prevent="">
      <q-card-actions>
        <div class="row">
          <div class="contenido">
            <q-input
              type="text"
              v-model="model.nombre"
              label="Stock"
              required
            />
          </div>
          <div class="contenido">
            <q-input
              type="text"
              v-model="model.apellido"
              label="Stock"
              required
            />
          </div>
        </div>
      </q-card-actions>
      <!-- <Buttons :lbl="labelButon" @click="datos()" /> -->
      <q-btn
        size="sm"
        color="primary"
        @click="stepFunction()"
        label="Continuar"
      />
      <q-btn
        flat
        @click="stepBackFunction()"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { myLocale, tipoCurso } from "../../../helper/helper";
import { ref } from "vue";
export default {
  props: ["posicion"],

  setup(props) {
    const curso = ref(""),
      store = useStore(),
      model = ref([]);

    let fechaInicio = ref(""),
      fechaFinal = ref();

    const stepFunction = () => {
      let nextNivel = props.posicion + 1;
      console.log(model.value);

      store.dispatch("updateStep", nextNivel);
    };
    const stepBackFunction = () => {
      let backNivel = props.posicion - 1;

      store.dispatch("updateStep", backNivel);
    };

    return {
      myLocale,
      curso,

      model,
      stepFunction,
      fechaInicio,
      stepBackFunction,
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
