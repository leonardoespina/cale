import { createStore } from "vuex";
import { post, token } from "../composable/bd.js";
import router from "../router/index";

export default createStore({
  state: {
    status: false,
    msg: "",
    step: 1,
    userData: [],
  },
  mutations: {
    AUTH_REQUEST(state, status) {
      state.status = status;
    },
    AUTH_SUCCESS(state, status) {
      state.status = status;
    },
    MSG(state, mensaje) {
      state.msg = mensaje;
    },
    LIMPIAR(state) {
      state.msg = "";
    },
    STEP(state, step) {
      state.step = step;
      console.log(state.step);
    },
  },
  actions: {
    async signUp({ commit }, payLoad) {
      const { urlPost } = payLoad;
      commit("AUTH_SUCCESS", true);
      await post(payLoad)
        .then((res) => {
          console.log(res);
          const { accessToken, message } = res.data;

          //  console.log(message);

          if (accessToken === null) {
            commit("AUTH_REQUEST", true);
            commit("MSG", message);
          } else {
            router.push(`${urlPost}`);

            token(res.data);
            commit("LIMPIAR");
          }
          commit("AUTH_SUCCESS", false);
        })
        .catch((err) => {
          commit("AUTH_SUCCESS", false);
          commit("MSG", `${err.message}`);
        });
    },
    updateStep({ commit }, step) {
      commit("STEP", step);
    },
  },
  getters: {
    listData: (state) => state.userData,
    isStatus: (state) => state.status,
    isMsg: (state) => state.msg,
    isStep: (state) => state.step,
  },
});
