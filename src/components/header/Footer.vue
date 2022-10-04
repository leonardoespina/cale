<template>
  <q-footer elevated class="bg-red-8 text-white">
    <q-toolbar>
      <q-toolbar-title>{{ tittles.Footer }} </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<script>
import { tittle } from "../../helper/helper.js";
export default {
  name: "Footer",

  setup() {
    const tittles = tittle[0];

    return { tittles };
  },
};
</script>
