<template>
  <div class="hold q-py-lg">
    <VueSlickCarousel
      :autoplay="true"
      :autoplaySpeed="3000"
      :dots="true"
      :slidesToShow="1"
      class="container"
    >
      <figure class="carousel-img">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/wild-hunt-large.jpg"
        />
      </figure>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,

        focusOnSelect: true,
        infinite: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay: true,
              autoplaySpeed: 2000,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: 0 auto;
  max-width: 1440px;
}

.cardd {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97); */
  /* padding: 2rem; */
  margin-right: 1rem;
  /* width: 350px !important; */
  min-height: 350px;
  margin-bottom: 1rem;
  /* box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75); */
  /* margin: 0 1rem; */
}

@media (max-width: 500px) {
  .slick-slider[data-v-3d1a4f76] {
    position: relative;
    padding: 2rem 0rem !important;
  }
  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .slick-dots {
    left: 50%;
    transform: translateX(-50%);
  }
}
.cardd img {
  width: 100%;
  /* width: 300px; */
  height: 200px;
}
.cardd h4 {
  font-size: 20px;
  margin: 0.75rem 0;
  text-align: center;
}
.cardd a {
  background-color: #ffdb58;
  padding: 0.45rem;
  margin: 0.75rem 0;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
}

/* .slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 50px;
  line-height: 1;
  opacity: 1;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

.hold {
  background: #333;
}

.slick-slider[data-v-3d1a4f76] {
  position: relative;
  padding: 2rem;
  display: flex;

  justify-content: space-between;
  box-sizing: border-box;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
  transform: translateZ(0);
}

.slick-dots li button {
  font-size: 50px;
  line-height: 1;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  /* color: #fff; */
  border: 0;
  border-radius: 50%;
  outline: none;
  background: #ffdb58;
}
.slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: #fff !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-next {
  /* right: 0; */
  top: 50%;
  transform: translate(0, -50%);
}
.slick-prev {
  /* right: 0; */
  top: 50%;
  transform: translate(0, -50%);
}
.slick-prev,
.slick-next {
  content: "" !important;
  /* font-size: 50px !important; */
  line-height: 1;
  position: absolute;
  top: 50%;
  /* display: block; */
  display: flex;
  width: 50px;
  height: 50px;
  /* padding: 1rem; */
  transform: translate(0, -50%);
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 50%;
  outline: none;
  background: #ffdb58 !important;
  /* text-indent: -9000px; */
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 30px;
  line-height: 1;
  opacity: 0.75;
  color: white;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-indent: 9000px; */
}

button #value {
  display: none;
}
</style>
