<template>
  <q-page class="">
    <Search />
    <Homeg />
    <Gridbig />
    <About />
    <Services />
    <Grid />
    <Coming />
    <Capture />
    <Events />
    <div class="ba">
      <Documentary />
      <Contact />
    </div>
    <Newsletter />
    <Blogs />
    <Sponsors />
    <Footer />
  </q-page>
</template>

<script>
import Gridbig from "../components/Home/Gridbig.vue";
import Homeg from "../components/Home/Homeg.vue";
import Search from "../components/Home/Search.vue";
import About from "../components/Home/About.vue";
import Services from "../components/Home/Services.vue";
import Grid from "../components/Home/Grid.vue";
import Coming from "../components/Home/Coming.vue";
import Capture from "../components/Home/Capture.vue";
import Events from "../components/Home/Events.vue";
import Documentary from "../components/Home/Documentary.vue";
import Contact from "../components/Home/Contact.vue";
import Newsletter from "../components/Home/Newsletter.vue";
import Sponsors from "../components/Home/Sponsors.vue";
import Blogs from "../components/Home/Blogs.vue";
import Footer from "../components/Home/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Gridbig,
    Homeg,
    Search,
    About,
    Services,
    Grid,
    Coming,
    Capture,
    Events,
    Documentary,
    Contact,
    Newsletter,
    Sponsors,
    Blogs,
    Footer,
  },
});
</script>

<style scoped>
.ba {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.58) 0%,
    rgba(229, 229, 229, 0.58) 47.4%
  );
}
</style>
