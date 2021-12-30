<template>
  <q-page>
    <Programshero />
  </q-page>
</template>

<script>
import Programshero from "../components/Programs/Programshero.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Programshero,
  },
});
</script>

<style scoped></style>
