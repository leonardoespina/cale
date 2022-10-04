<template>
  <div v-for="cards in card" :key="cards.id">
    <q-card class="my-card" flat bordered>
      <q-img :src="cards.img" />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ cards.titulo }}</div>

        <div class="text-caption text-black">
          {{ cards.contenido }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { card as Card } from "../../helper/helper.js";
export default {
  setup() {
    const card = Card;

    return { card };
  },
};
</script>
