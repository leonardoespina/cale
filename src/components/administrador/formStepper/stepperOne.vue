<template>
  <q-step
    :name="position"
    :title="titless"
    :icon="icons"
    :done="step > position"
    :header-nav="step > position"
  >
    <template v-slot:prepend>
      <q-icon name="edit" color="blue" />
    </template>

    <q-stepper-navigation>
      <slot></slot>
    </q-stepper-navigation>
  </q-step>
</template>
<script>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  props: ["posicion", "icon", "titles"],
  setup(props) {
    const step = ref(""),
      position = ref(props.posicion),
      titless = ref(props.titles),
      icons = ref(props.icon),
      store = useStore();
    console.log(position.value);

    watchEffect(() => {
      step.value = store.getters.isStep;
    });
    return {
      step,
      position,
      titless,
      icons,
      model: ref("one"),
    };
  },
};
</script>
