<template>
  <q-item
    v-for="menus in menuLocal"
    :key="menus.id"
    clickable
    v-ripple
    :to="menus.ruta"
    exact
    active-class="my-menu-link"
  >
    <q-item-section avatar>
      <q-icon :name="menus.icon" />
    </q-item-section>

    <q-item-section> {{ menus.name }} </q-item-section>
  </q-item>
</template>
<script>
import { menuAll } from "../../helper/helper.js";
import { token } from "../../composable/bd";
export default {
  setup() {
    let menuLocal;
    const { menu } = token(null);

    menuLocal = menuAll[menu];

    return { menuLocal };
  },
};
</script>
