<template>
  <div class="ho q-py-lg">
    <Splide :options="options">
      <SplideSlide>
        <img src="/images/king.png" alt="" />
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
      <SplideSlide>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/C7VpcfBRKd0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
      <SplideSlide>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/C7VpcfBRKd0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
      <SplideSlide>
        <img src="images/logo2.png" class="im" alt="Sample 2" />
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
      <SplideSlide>
        <img src="images/logo2.png" class="im" alt="Sample 2" />
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
      <SplideSlide>
        <img src="images/logo2.png" class="im" alt="Sample 2" />
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
      <SplideSlide>
        <img src="images/logo2.png" class="im" alt="Sample 2" />
        <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
      </SplideSlide>
    </Splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        arrows: false,
        perPage: 3,
        gap: "1rem",
        height: "15rem",
        breakpoints: {
          1000: {
            perPage: 3,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.im {
  width: 150px;
  height: 150px;
}
</style>
