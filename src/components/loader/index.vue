<template>
  <div class="q-pa-md"></div>
</template>

<script>
import { watchEffect } from "vue";
import { useQuasar } from "quasar";
import { messages } from "../../helper/validation.js";
//import { onBeforeUnmount /*, onMounted */ } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const $q = useQuasar(),
      store = useStore();

    //  let timer;

    /*  onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });*/
    watchEffect(() => {
      //$q.loading.show();

      if (store.getters.isStatus === true) {
        $q.loading.show();

        // hiding in 2s
        /*   timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;
        }, 2000);*/
      } else {
        $q.loading.hide();

        if (store.getters.isMsg !== "") {
          $q.notify(
            messages(store.getters.isMsg, "positive", "close", "normal")
          );
        }
      }
    });
  },
};
</script>
