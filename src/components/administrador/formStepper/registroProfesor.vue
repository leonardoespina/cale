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
//import Card from "./card.vue";
//import operation from "../../composable/index.js";
import { useStore } from "vuex";
import { myLocale, tipoCurso } from "../../../helper/helper";
import { ref } from "vue";
export default {
  components: {
    //   Buttons,
  },
  //se pudiera injectar INJECT()
  props: ["posicion"],

  setup(props) {
    const curso = ref(""),
      store = useStore(),
      model = ref([]);

    let fechaInicio = ref(""),
      fechaFinal = ref();

    console.log(props.posicion);

    const stepFunction = () => {
      let nextNivel = props.posicion + 1;

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
