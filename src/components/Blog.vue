<template>
  <div class="blog bg-dark">
    <!-- {{ blog.posterImgs[0] }} -->
    <div class="big__logo">
      <img class="logo__big" src="/images/logo2.png" alt="" />
    </div>

    <div class="blog__card container">
      <div class="posterimg">
        <template v-if="blog.posterImgs">
          <q-carousel
            style="height: calc(75vh - 48px)"
            animated
            v-model="slide"
            control-color="white"
            navigation-icon="radio_button_unchecked"
            navigation
            infinite
            vertical
          >
            <q-carousel-slide
              style="background-position: top"
              :name="1"
              :img-src="blog.posterImgs[0]"
            >
            </q-carousel-slide>
            <q-carousel-slide
              style="background-position: top"
              :name="2"
              :img-src="blog.posterImgs[1]"
            >
            </q-carousel-slide>
            <q-carousel-slide
              style="background-position: top"
              :name="3"
              :img-src="blog.posterImgs[2]"
            >
            </q-carousel-slide>
          </q-carousel>
        </template>
        <template v-else>
          <img :src="blog.posterImg" alt="" />
        </template>
      </div>
      <div class="_27W_cjOv q-my-sm">
        <div class="_31aQZWyI text-primary text-weight-bold">
          {{ blog.name }}
        </div>
      </div>
      <div class="text-weight-bold text-h5 title q-my-md">
        {{ blog.title }}
      </div>
      <!-- <div
        v-for="(imgs, index) in blog.posterImgs"
        :key="index"
        :name="1"
        :img-src="imgs"
      >
        <p>{{ imgs }}</p>
      </div> -->

      <template v-if="blog.longerDesc">
        <p class="">
          {{ blog.longerDesc }}
        </p>
      </template>
      <template v-else>
        <p class="">
          {{ blog.desc }}
        </p>
      </template>

      <!-- {{ blog.images }} -->
      <div v-if="blog.images" class="images">
        <img
          v-for="(image, index) in blog.images"
          :key="index"
          :src="image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      blog: JSON.parse(localStorage.getItem("blog")),
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
.logo__big {
  position: absolute;
  height: 300px;
  object-fit: cover;
  z-index: -1;
  display: none;
}
.blog__card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
  background: white;
  padding: 1.5rem;
  width: 65%;
  height: 100%;
}

.blog__card img {
  width: 100%;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 3rem 0;
}
.images img {
  height: 250px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}
.images img:hover {
  transform: scale(1.1);
}

@media (max-width: 700px) {
  .blog__card {
    width: 95%;
  }

  .images {
    grid-template-columns: 1fr;
  }
}
</style>
