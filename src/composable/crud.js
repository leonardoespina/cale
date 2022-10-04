//import axios from "axios";
//import { ref } from "vue";
import store from "../store/index.js";
//import axios from "vue-axios";
//import { post } from "../composable/bd.js";
//import { ref } from "vue";

const dataBd = () => {
  const signUp = (val) => {
    store.dispatch("signUp", val);
  };

  return { signUp };
};

export default dataBd;
