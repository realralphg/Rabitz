<template>
  <q-page>
    <Eventshome />
    <Gride />
    <Grider />

    <div class="hol bg-dark">
      <Fashion />
      <q-separator class="sep" />
      <Exhibition />
    </div>
    <Sponsored />
    <Splide />
    <Sponsors />
    <Footer />
  </q-page>
</template>

<script>
import Eventshome from "../components/Events/Eventshome.vue";
import Gride from "../components/Events/Gride.vue";
import Grider from "../components/Events/Grider.vue";
import Exhibition from "../components/Events/Exhibition.vue";
import Fashion from "../components/Events/Fashion.vue";
import Sponsored from "../components/Events/Sponsored.vue";
import Splide from "../components/Events/Splide.vue";
import Sponsors from "../components/Home/Sponsors.vue";
import Footer from "../components/Home/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Eventshome,
    Gride,
    Grider,
    Fashion,
    Exhibition,
    Sponsored,
    Splide,
    Sponsors,
    Footer,
  },
});
</script>

<style scoped>
.sep {
  background-color: #9d1e81;
}
</style>
