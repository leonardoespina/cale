<template>
  <q-layout view="hHh lpR fFf">
    <Menu />
    <q-page-container> <Inicio /><router-view /> </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Menu from "../components/header/Menu";
import Footer from "../components/header/Footer";
import Inicio from "../components/inicio/index";
export default {
  components: { Menu, Footer, Inicio },
};
</script>
