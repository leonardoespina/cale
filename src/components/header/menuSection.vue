<template>
  <q-list bordered separator>
    <q-item clickable v-close-popup>
      <q-item v-for="menus in menu" :key="menus.id" :to="menus.ruta">
        <q-item-section>{{ menus.name }}</q-item-section>
      </q-item>
    </q-item>
    <q-item clickable v-ripple to="/salir">
      <q-item-section> Salir </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import { menuSection } from "../../helper/helper.js";
export default {
  setup() {
    const menu = menuSection;

    const ruta = (val) => {
      console.log(val);
    };

    return { ruta, menu };
  },
};
</script>
