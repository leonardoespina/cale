<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white q-my-md shadow-2">
      <q-btn flat round dense icon="edit" label="Registro" class="q-mr-sm" />
      <q-space />

      <q-btn-toggle
        v-model="model"
        flat
        stretch
        toggle-color="yellow"
        :options="options"
      />
    </q-toolbar>
    <q-stepper v-model="step" vertical ref="stepper" color="primary" animated>
      <!------------------>
      <Steppertone
        :posicion="1"
        :title="'Datos Basicos del Curso'"
        :icon="'add_box'"
      >
        <DatosCurso :posicion="1" />
      </Steppertone>
      <!------------------>

      <Steppertone :posicion="2" :title="'Modulos del Curso'" :icon="'add_box'">
        <RegistroModulo :posicion="2"
      /></Steppertone>
      <!------------------>
      <Steppertone :posicion="3" :title="'Profesores'" :icon="'settings'">
        <RegistroProfesor :posicion="3"
      /></Steppertone>
      <!------------------>
    </q-stepper>
  </div>
</template>

<script>
//import Card from "./card.vue";
//import operation from "../../composable/index.js";

import { myLocale, tipoCurso } from "../../helper/helper";
import { useStore } from "vuex";
import Steppertone from "../administrador/formStepper/stepperOne.vue";

import DatosCurso from "../administrador/formStepper/registroCurso.vue";
import RegistroModulo from "../administrador/formStepper/registroModulo.vue";
import RegistroProfesor from "../administrador/formStepper/registroProfesor.vue";
//import hola from "../administrador/formStepper/prueba.vue";
import { ref, watchEffect } from "vue";
export default {
  components: {
    Steppertone,
    RegistroModulo,
    RegistroProfesor,

    DatosCurso,
    //  hola,
  },
  setup() {
    const curso = ref([]),
      store = useStore();
    let fechaInicio = ref(""),
      step = ref(store.getters.isStep),
      fechaFinal = ref();

    const holas = "<template><div>Hola</div></template>";

    watchEffect(() => {
      if (store.getters.isStep > 0) {
        step.value = store.getters.isStep;
      }
    });

    return {
      myLocale,
      curso,
      fechaInicio,
      fechaFinal,
      tipoCurso,
      step,
      holas,
      model: ref("one"),

      options: [{ label: "Consultar", value: "one" }],
    };
  },
};
</script>
