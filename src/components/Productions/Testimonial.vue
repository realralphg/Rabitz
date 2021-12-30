<template>
  <div class="wrap bg-negative q-py-xl">
    <div class="det text-center q-my-sm q-py-sm">
      <h4 class="text-center text-primary text-weight-bold">Testimonial</h4>
      <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    </div>

    <div class="spl q-py-lg q-px-lg text-negative">
      <Splide :options="options">
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="holder bg-primary">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
              accusamus adipisci a dolor animi quos cupiditate laborum velit ex?
              Repudiandae nam nemo recusandae inventore perspiciatis
            </p>
            <img src="images/avatar.png" alt="" />
          </div>
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
  width: 100%;

  padding: 1rem;
  text-align: center;
  position: relative;
}

.holder p {
  margin-bottom: 3rem;
}

.holder img {
  position: absolute;

  width: 80px;

  height: 80px;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
}

.splide__pagination {
  bottom: -3.5% !important;
}

.splide__pagination li {
  background: purple;
}
</style>
