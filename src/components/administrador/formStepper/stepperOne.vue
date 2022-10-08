<template>
  <q-step
    :name="1"
    title="Datos Basicos del Curso"
    icon="settings"
    :done="step > 1"
    :header-nav="step > 1"
  >
    <template v-slot:prepend>
      <q-icon name="edit" color="blue" />
    </template>
    <slot></slot>
    <q-stepper-navigation>
      <q-btn
        @click="stepFunction(2)"
        size="sm"
        color="primary"
        label="Continue"
      />
      <!--  @click="
          () => {
            done1 = true;
            step = 2;
          }--->
    </q-stepper-navigation>
  </q-step>
</template>
<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  props: ["num"],
  setup(props) {
    const step = ref(""),
      store = useStore();

    console.log(props.num);

    const stepFunction = (val) => {
      store.dispatch("updateStep", val);
    };

    watchEffect(() => {
      if (store.getters.isStep > 1) {
        step.value = store.getters.isStep;
      }
    });
    return { step, stepFunction, model: ref("one") };
  },
};
</script>
