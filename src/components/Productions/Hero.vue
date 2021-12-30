<template>
  <div class="holder bg-dark q-py-xl">
    <div class="det">
      <h1
        aria-hidden="true"
        class="text-primary glitch q-py-sm text-center text-weight-bold"
      >
        <!-- <span aria-hidden="true">Production</span> -->
        Production
        <!-- <span aria-hidden="true">Production</span> -->
      </h1>
      <h4 class="text-negative q-py-sm text-weight-bold text-center">
        We tell remarkable stories
      </h4>
      <p class="text-center text-negative q-py-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        aut, illum eos nulla optio inventore?
      </p>
    </div>

    <div class="slider container">
      <h5 class="text-primary text-weight-bold">Videography</h5>
      <p class="text-negative">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Facere, vitae.
      </p>
    </div>

    <div class="spl text-white q-px-lg">
      <Splide :options="options">
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
          <img src="images/logo2.png" alt="Sample 2" />
          <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
        </SplideSlide>
        <SplideSlide>
          <img src="images/logo2.png" alt="Sample 2" />
          <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
        </SplideSlide>
        <SplideSlide>
          <img src="images/logo2.png" alt="Sample 2" />
          <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
        </SplideSlide>
        <SplideSlide>
          <img src="images/logo2.png" alt="Sample 2" />
          <p class="q-my-sm">Lorem ipsum dolor sit amet.</p>
        </SplideSlide>
      </Splide>
    </div>
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
.holder {
  margin-top: 4rem;
}

.slider {
  margin: 5rem auto 1.5rem;
  padding-top: 3rem;
}

.splide__pagination {
  bottom: -1.5em;
}

.det {
  margin: 3rem 0;
}

img {
  width: 150px;
  height: 150px;
}

.glitch {
  font-size: 8rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;

  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  animation: glitch 500ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  /* color: green; */
  opacity: 0.8;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  /* color: red; */
  opacity: 0.8;
}

/* https://web.dev/prefers-reduced-motion/#(bonus)-forcing-reduced-motion-on-all-websites */

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
</style>
