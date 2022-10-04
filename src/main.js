import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Notify, Loading } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";
import axios from "axios";
import createStrore from "./store/index";
import VueAxios from "vue-axios";

//import router from './router'
axios.defaults.baseURL = "http://localhost:3000/";
createApp(App)
  .use(router)
  .use(createStrore)
  .use(VueAxios, axios)
  .use(Quasar, { plugins: { Notify, Loading } }, quasarUserOptions)
  .mount("#app");
