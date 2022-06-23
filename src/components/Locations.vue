<template>
  <div class="wrapper q-py-xl">
    <div class="container">
      <div class="text-primary text-center bold-text _1jHz3wcf">
        Events, Sights and Monuments
      </div>
      <div class="text-center p">
        We lead an advocacy for the preservation of local content throughout
        Africa starting from Northern Nigeria. Africa is home to some of the
        world's finest places and tourist destinations. Our culture is to be
        experienced and cherished by all who traverse this plain. There's more
        than meets the eye.
      </div>

      <div class="slide_loca q-pt-xl">
        <Splide :options="options">
          <SplideSlide v-for="location in locations_venue" :key="location.id">
            <div class="card_div">
              <div class="img">
                <img :src="location.img" alt="" />
              </div>
              <p class="q-pt-sm text-dark text-weight-medium text-h6">
                {{ location.loca }}
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

// or only core styles
import "@splidejs/vue-splide/css/core";
export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
      perPage: 5,
      arrows: false,
      autoplay: true,
      breakpoints: {
        1500: {
          perPage: 4,
        },

        1300: {
          perPage: 3,
        },
        800: {
          perPage: 2,
        },
        650: {
          perPage: 1,
        },
      },
    };
    return {
      options,
    };
  },
  data() {
    return {
      locations_venue: [
        {
          id: 1,
          img: "/images/QueenAminaSiteatTurunku.jpg",
          loca: "Queen Amina Site at Turunku",
        },
        {
          id: 2,
          img: "/images/AfanFestivalKagoro.jpg",
          loca: "Afan Festival Kagoro",
        },
        {
          id: 3,
          img: "/images/EmirsPalaceZazzau.jpg",
          loca: "Emir's Palace Zazzau",
        },
        {
          id: 4,
          img: "/images/FifthChukker.jpg",
          loca: "Fifth Chukker",
        },
        {
          id: 5,
          img: "/images/Kaduna_Centenary.jpg",
          loca: "Kaduna Centenary",
        },
        {
          id: 6,
          img: "/images/Kaduna_Centenary1.jpg",
          loca: "Kaduna Centenary",
        },
        {
          id: 7,
          img: "/images/Kaduna_KADFEST.jpg",
          loca: "Kaduna KADFEST",
        },
        {
          id: 8,
          img: "/images/Kajuru_Castle.jpg",
          loca: "Kajuru Castle",
        },
        {
          id: 9,
          img: "/images/Kajuru_village.jpg",
          loca: "Kajuru Village",
        },
      ],
    };
  },
});
</script>

<style scoped>
img {
  width: 100%;
}

.card_div {
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  margin-bottom: 2rem;
  padding: 0 0.75rem 2rem;
  min-height: 350px;
}

.card_div img {
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
}

.p {
  color: #455065;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 16px;
  text-align: center;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .card_div {
    min-height: 300px;
  }
}
</style>
