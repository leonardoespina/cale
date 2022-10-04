<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-overline text-orange-9 text-center">Bienvenidos</div>

      <div class="text-caption text-black">
        <q-form class="q-gutter-md" @submit.prevent="singUpComponet">
          <q-input
            square
            filled
            v-model="model.user"
            clearable
            label="login"
            bg-color="field"
            required
          >
            <template v-slot:prepend>
              <q-icon name="face" color="blue" />
            </template>
          </q-input>
          <q-input
            square
            filled
            clearable
            v-model="model.password"
            type="password"
            label="Password"
            bg-color="field"
            required
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="blue" />
            </template>
          </q-input>

          <div class="text-overline text-orange-9 text-center">
            <q-card-actions class="q-px-md">
              <q-btn
                unelevated
                color="red"
                type="submit"
                label="Acceder"
                size="sm"
              >
              </q-btn>

              <q-btn unelevated color="primary" size="sm" label="Registrese" />
              <q-btn unelevated color="green" size="sm" label="Recuperar" />
            </q-card-actions>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref, inject } from "vue";
import dataBd from "../../composable/crud";

export default {
  setup() {
    const model = ref([]);
    let url = inject("payLoad");

    console.log(inject("payLoad"));

    const singUpComponet = () => {
      let data = {
        email: model.value.user,
        password: model.value.password,
      };

      const { signUp } = dataBd();

      let payLoad = {
        url: url.urlApi,
        urlPost: url.urlPost,
        data: data,
      };
      signUp(payLoad);
    };
    return { singUpComponet, model };
  },
};
</script>
