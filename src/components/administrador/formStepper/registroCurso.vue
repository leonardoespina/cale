<template>
  <div class="q-pa-md justify-left row items-start q-gutter-md">
    <q-form @submit.prevent="">
      <q-card-actions>
        <div class="row">
          <div class="contenido">
            <q-input
              type="text"
              v-model="model.nombreCurso"
              label="Nombre"
              required
            >
              <template v-slot:prepend>
                <q-icon name="card_membership" color="blue" />
              </template>
            </q-input>
          </div>
          <div class="contenido">
            <q-input
              type="number"
              v-model="model.cantidadParticipantes"
              label="Cantidad Participantes"
              required
            >
              <template v-slot:prepend>
                <q-icon name="person" color="blue" />
              </template>
            </q-input>
          </div>
          <div class="contenido">
            <q-input
              v-model="model.FechaInicio"
              label="Fecha de Inicio"
              required
            >
              <template v-slot:prepend>
                <q-icon name="date_range" color="blue" />
              </template>
            </q-input>
          </div>
          <div class="contenido">
            <q-input v-model="model.FechaFinal" label="Fecha de Final" required>
              <template v-slot:prepend>
                <q-icon name="date_range" color="blue" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="contenido">
          <q-input v-model="model.precio" label="Precio del Curso" required>
            <template v-slot:prepend>
              <q-icon name="money" color="green" />
            </template>
          </q-input>
        </div>
      </q-card-actions>
      <!-- <Buttons :lbl="labelButon" @click="datos()" /> -->
      <q-btn
        size="sm"
        color="primary"
        @click="stepFunction()"
        label="Continuar"
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

    const stepFunction = () => {
      let nextNivel = props.posicion + 1;
      console.log(model.value);
      store.dispatch("updateStep", nextNivel);
    };

    return {
      myLocale,
      curso,

      model,
      stepFunction,
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
