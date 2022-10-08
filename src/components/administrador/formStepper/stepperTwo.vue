<template>
  <q-step
    :name="2"
    title="Modulos del Curso"
    icon="create_new_folder"
    :done="step > 2"
    :header-nav="step > 2"
  >
    An ad group contains one or more ads which target a shared set of keywords.

    <q-stepper-navigation>
      <q-btn @click="stepFunction(3)" color="primary" label="Continue" />
      <q-btn
        flat
        @click="stepFunction(1)"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
  </q-step>
</template>
<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  props: ["step1"],
  setup() {
    const step = ref(""),
      store = useStore();

    const stepFunction = (val) => {
      store.dispatch("updateStep", val);
    };

    watchEffect(() => {
      if (store.getters.isStep > 1) {
        step.value = store.getters.isStep;
        console.log(store.getters.isStep);
      }
    });
    return { step, stepFunction, model: ref("one") };
  },
};
</script>
