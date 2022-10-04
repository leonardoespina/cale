<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated class="bg-red-9"> <Menu /></q-header>
      <q-page class="row justify-center bg-image">
        <div class="column">
          <div class="row">
            <h5 class="text-h6 text-black text-center full-width"></h5>
          </div>
          <div class="row">
            <q-card square class="q-pa-lg shadow-0" style="background: none">
              <q-card-section> <Login /> </q-card-section>
            </q-card>
            <Footer />
          </div>
        </div>
      </q-page>

      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref, provide } from "vue";
import Login from "../../components/login/index.vue";
import Menu from "../../components/header/Menu.vue";
import Footer from "../../components/header/Footer.vue";
export default {
  components: {
    Login,
    Menu,
    Footer,
  },
  setup() {
    const payLoad = ref("/api/user/signin/");
    const urlPost = ref("/");
    provide("payLoad", { urlApi: payLoad.value, urlPost: urlPost.value });
  },
};
</script>
