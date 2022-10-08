<template>
  <q-step
    :name="3"
    title="Create an ad"
    icon="add_comment"
    :header-nav="step > 3"
  >
    Try out different ad text to see what brings in the most customers, and
    learn how to enhance your ads using features like ad extensions. If you run
    into any problems with your ads, find out how to tell if they're running and
    how to resolve approval issues.

    <q-stepper-navigation>
      <q-btn color="primary" @click="done3 = true" label="Finish" />
      <q-btn
        flat
        @click="stepFunction(2)"
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
      }
    });
    return { step, stepFunction, model: ref("one") };
  },
};
</script>
