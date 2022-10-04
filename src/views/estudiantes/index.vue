<template>
  <q-layout view="hHh lpR fFf">
    <Menu />
    <q-page-container
      ><div><Inicio v-if="countPath === true" /></div>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Menu from "../../components/header/Menu";
import Footer from "../../components/header/Footer";
import Inicio from "../../components/estudiantes/index";
import { useRouter } from "vue-router";
export default {
  components: { Menu, Footer, Inicio },
  setup() {
    const router = useRouter(),
      { currentRoute } = router;
    let countPath = currentRoute.value.matched.length;

    countPath === 1 ? (countPath = true) : (countPath = false);

    console.log(countPath);

    return { countPath };
  },
};
</script>
