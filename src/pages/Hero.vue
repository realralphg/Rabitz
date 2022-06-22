<template>
  <div class="hold">
    <div class="hero">
      <div class="">
        <q-carousel
          style="height: calc(75vh - 48px)"
          animated
          v-model="slide"
          control-color="white"
          navigation-icon="radio_button_unchecked"
          navigation
          infinite
          vertical
          autoplay
        >
          <q-carousel-slide
            :name="1"
            img-src="https://cinesamples.com/magazine/wp-content/uploads/2021/04/Studio_1_of_Studios_301-edited-1.jpeg"
          >
            <div
              style="height: 100%"
              class="flex column justify-center hero__text items-start container"
            >
              <div class="big__logo">
                <img class="logo__big" src="/images/logowhite.png" alt="" />
              </div>
              <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>

              <p data-testid="hero-subtitle" class="_2NDX9tRa">
                Rabitz Studios is a creative park of exclusive African content
                driven by a network of passionate, innovative and creative minds
                with a mission to re-tell the African story. We are driven by
                culture!
              </p>
              <div class="F4RPkxoc">
                <q-btn
                  size="sm"
                  to="/about"
                  class="bg-primary text-white q-px-lg q-mt-md q-py-sm"
                >
                  Know More
                </q-btn>
              </div>

              <h6
                data-testid="hero-sub-title"
                aria-hidden="true"
                class="text-primary glitch q-py-sm _2trwDkHI_sub text-weight-bold"
              >
                Wetin dey play?
              </h6>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="/images/gbam7.jpg">
            <div
              style="height: 100%"
              class="flex column justify-center hero__text items-end text-right q-pr-sm container"
            >
              <div class="big__logo">
                <img class="logo__big" src="/images/logowhite.png" alt="" />
              </div>
              <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>
              <small
                data-testid="hero-title"
                class="text-primary q-mb-sm text-h5 text-weight-bold"
              >
                Partnership
              </small>

              <p data-testid="hero-subtitle" class="_2NDX9tRa">
                At Rabitz Studios, excellence is a keyword. Hence we have
                identified some of the finest, brightest and most promising
                brands in Northern Nigeria to partner with.
              </p>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="3" img-src="/images/eve14.jpg">
            <div
              style="height: 100%"
              class="flex column justify-center hero__text items-end text-right container"
            >
              <div class="big__logo">
                <img class="logo__big" src="/images/logowhite.png" alt="" />
              </div>
              <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>
              <small
                data-testid="hero-title"
                class="text-primary q-mb-sm text-h5 text-weight-bold"
                >Culture</small
              >

              <p data-testid="hero-subtitle" class="_2NDX9tRa">
                Rabitz Studios is a creative park of exclusive African content
                driven by a network of passionate, innovative and creative minds
                with a mission to re-tell the African story. We are driven by
                culture!
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            img-src="https://wallpaperaccess.com/full/1626298.jpg"
          >
            <div
              style="height: 100%"
              class="flex column justify-center hero__text items-end text-right q-pr-sm container"
            >
              <div class="big__logo">
                <img class="logo__big" src="/images/logowhite.png" alt="" />
              </div>
              <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>
              <small
                data-testid="hero-title"
                class="text-primary q-mb-sm text-h5 text-weight-bold"
              >
                Virtual Reality
              </small>

              <p data-testid="hero-subtitle" class="_2NDX9tRa">
                Our affinity towards tech in creativity drives us into the block
                chain and VR space where we convert music, arts, films and other
                creative contents into NFTs as well as offer VR representation
                of African cultural monuments as a service.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            img-src="https://www.unicef.org/nigeria/sites/unicef.org.nigeria/files/styles/hero_desktop/public/Lara%20and%20friends%20animation%203.png?itok=yyBdTS0q"
          >
            <div
              style="height: 100%"
              class="flex column justify-center hero__text items-start container"
            >
              <div class="big__logo flex justify-end">
                <img class="logo__big" src="/images/logowhite.png" alt="" />
              </div>
              <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>
              <small
                data-testid="hero-title"
                class="text-primary q-mb-sm text-h5 text-weight-bold"
                >Animations</small
              >

              <p data-testid="hero-subtitle" class="_2NDX9tRa">
                Following our passion to tell the African story, we have hired,
                trained and established various collaborations with industry
                standard experts to produce globally competitive animation
                projects.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="6" img-src="/images/act.jpeg">
            <div
              style="height: 100%"
              class="flex column justify-center hero__text items-end text-right container"
            >
              <div class="big__logo">
                <img class="logo__big" src="/images/logowhite.png" alt="" />
              </div>
              <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>
              <small
                data-testid="hero-title"
                class="text-h5 q-mb-sm text-weight-bold text-primary"
                >Cinematography</small
              >

              <p data-testid="hero-subtitle" class="_2NDX9tRa">
                Our expertise in storytelling, directing, writing, pre and post
                production activities are unparalleled. We have the tools and
                expertise to traverse traditional film making into 360 degrees
                VR Filming.
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <!-- <h1 data-testid="hero-title" class="_2trwDkHI">
                Hire the <a href="top-3-percent.html">Top 3%</a> of Freelance
                Talent<sup>®</sup>
              </h1>
        <h1 data-testid="hero-title" class="_2trwDkHI">Rabitz Studios</h1>

        <p data-testid="hero-subtitle" class="_2NDX9tRa">
          Rabitz Studios is a creative park of exclusive African content driven
          by a network of passionate, innovative and creative minds with a
          mission to re-tell the African story. We are driven by culture!
        </p>
        <div class="F4RPkxoc">
          <q-btn class="bg-primary text-white q-px-xl q-py-md">
            Know More
          </q-btn>
        </div>
      </div>
      <h6
        data-testid="hero-sub-title"
        aria-hidden="true"
        class="text-primary glitch q-py-sm _2trwDkHI_sub text-weight-bold"
      >
        Wetin dey play?
      </h6>

      <div class="">
        <q-carousel :autoplay="2500" animated v-model="slide" arrows infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div> -->

        <!-- <q-carousel
        arrows
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        class="hero__carousel"
        v-model="slide"
        thumbnails
        infinite
      >
        <q-carousel-slide :name="1" img-src="/images/davidade.png">
          <div class="_25TfQgrH abs">
            <p class="_23yTT71X">Davido</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="/images/burnaa.png">
          <div class="_25TfQgrH abs">
            <p class="_23yTT71X">Burna Boy</p>
            <p class="_27Qy9QKP _1Tb3uueM">Portharcourt, Nigeria</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="/images/bigwiz.png">
          <div class="_25TfQgrH abs">
            <p class="_23yTT71X">Wizkid</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="/images/olamide3.png"
          ><div class="_25TfQgrH abs">
            <p class="_23yTT71X">Olamide</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="5" img-src="/images/yemi.png"
          ><div class="_25TfQgrH abs">
            <p class="_23yTT71X">Yemi Alade</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="6" img-src="/images/simi3.png"
          ><div class="_25TfQgrH abs">
            <p class="_23yTT71X">Simi</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="7" img-src="/images/falz.png"
          ><div class="_25TfQgrH abs">
            <p class="_23yTT71X">Falz</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="8" img-src="/images/teni.png"
          ><div class="_25TfQgrH abs">
            <p class="_23yTT71X">Teni</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="9" img-src="/images/phyno.png">
          <div class="_25TfQgrH abs">
            <p class="_23yTT71X">Phyno Ezege</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="10" img-src="/images/flavour.png">
          <div class="_25TfQgrH abs">
            <p class="_23yTT71X">Ijele1 Flavour</p>
            <p class="_27Qy9QKP _1Tb3uueM">Enugu, Nigeria</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="11" img-src="/images/don.png">
          <div class="_25TfQgrH abs">
            <p class="_23yTT71X">Don Jazzy</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos, Nigeria</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="12" img-src="/images/fireboy.png">
          <div class="_25TfQgrH">
            <p class="_23yTT71X">Fireboy DML</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="13" img-src="/images/rema.png">
          <div class="_25TfQgrH">
            <p class="_23yTT71X">Rema</p>
            <p class="_27Qy9QKP _1Tb3uueM">Lagos</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="14" img-src="/images/sarkodie2.png">
          <div class="_25TfQgrH">
            <p class="_23yTT71X">Sarkodie</p>
            <p class="_27Qy9QKP _1Tb3uueM">Ghana</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="15" img-src="/images/jordan.png">
          <div class="_25TfQgrH">
            <p class="_23yTT71X">Jordan</p>
            <p class="_27Qy9QKP _1Tb3uueM">Kaduna</p>
          </div>
        </q-carousel-slide>
      </q-carousel> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style scoped>
.glitch {
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  text-shadow: 0.05em 0 0 rgba(0, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(255, 255, 255, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 0, 0.75);

  animation: glitch 500ms infinite;
}
.big__logo {
  position: absolute;
  left: -6%;
  top: 18%;
}

.hero__text {
  position: relative;
  z-index: 2;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(0, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(255, 255, 255, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 0, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(0, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(255, 255, 255, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 0, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(0, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(255, 255, 255, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 0, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(0, 0, 0, 0.75),
      0.05em 0 0 rgba(255, 255, 255, 0.75), 0 -0.05em 0 rgba(0, 0, 0, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(0, 0, 0, 0.75),
      0.05em 0 0 rgba(255, 255, 255, 0.75), 0 -0.05em 0 rgba(0, 0, 0, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(0, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(255, 255, 255, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 0, 0.75);
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

@media (min-width: 800px) {
  ._2NDX9tRa {
    max-width: 700px !important;
  }
}
@media (max-width: 800px) {
  .big__logo {
    display: none;
  }
  .glitch {
    font-size: 1.5rem;
    bottom: -2%;
  }
}
</style>
