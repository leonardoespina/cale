<template>
  <!-- <q-page padding>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section class="bg-red text-white"></q-card-section>

        <q-card-actions vertical align="center"> s </q-card-actions>
      </q-card>

      <q-separator />
    </div>
  </q-page>-->

  <div class="q-pa-md justify-center row items-start q-gutter-md">
    <Card />
  </div>
</template>

<script>
import Card from "./card.vue";
//import operation from "../../composable/index.js";

export default {
  components: {
    Card,
  },
  setup() {},
};
</script>
