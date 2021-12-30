<template>
  <q-page class="bg-dark">
    <Hero />
    <Photography />
    <Music />
    <Sound />
    <Shots />
    <Testimonial />
    <Story />

    <div class="bg">
      <Newsletter />
      <Sponsors />
    </div>

    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/Productions/Hero.vue";
import Photography from "../components/Productions/Photography.vue";
import Music from "../components/Productions/Music.vue";
import Sound from "../components/Productions/Sound.vue";
import Shots from "../components/Productions/Shots.vue";
import Testimonial from "../components/Productions/Testimonial.vue";
import Story from "../components/Productions/Story.vue";
import Newsletter from "../components/Home/Newsletter.vue";
import Sponsors from "../components/Home/Sponsors.vue";

import Footer from "../components/Home/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,
    Photography,
    Music,
    Sound,
    Shots,
    Testimonial,
    Story,
    Newsletter,
    Sponsors,
    Footer,
  },
});
</script>

<style scoped>
.bg {
  padding-top: 5rem;
  background: #fff !important;
}
</style>
