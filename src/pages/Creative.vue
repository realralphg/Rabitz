<template>
  <q-page>
    <Creativehero />
    <Quotes />
    <Culture />
    <Sponsors />
    <Footer />
  </q-page>
</template>

<script>
import Creativehero from "../components/Creative/Creativehero.vue";
import Quotes from "../components/Programs/Quotes.vue";
import Culture from "../components/Programs/Culture.vue";
import Sponsors from "../components/Home/Sponsors.vue";
import Footer from "../components/Home/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Creativehero,
    Quotes,
    Culture,
    Sponsors,
    Footer,
  },
});
</script>

<style scoped></style>
