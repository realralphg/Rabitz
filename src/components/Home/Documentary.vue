<template>
  <section class="about q-my-xl section" id="about">
    <img class="arrow container" src="images/arb.png" alt="" />
    <!-- <div class="det q-pa-md">
      <h2 class="text-center text-weight-bold text-primary">Our Core Values</h2>
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, sed.
      </p>
    </div> -->

    <div class="about__container container grid">
      <div class="about__data">
        <h3
          class="
            section__title
            text-weight-bold
            q-mb-md
            text-primary
            about__title
          "
        >
          Documentary/Interview
          <!-- More Information <br />
              About Us -->
        </h3>
        <h4 class="q-mb-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          dolorem.
        </h4>
        <p class="about__description q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>
        <q-btn class="bg-primary q-pa-md text-negative button"
          >View All Singers</q-btn
        >
      </div>
      <div class="img">
        <img src="images/about.png" alt="" />
        <img src="images/about.png" alt="" />
        <img src="images/about.png" alt="" />
        <img src="images/about.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  position: relative;
}

.arrow {
  width: 70px;
  height: 70px;
  left: 4%;
  object-fit: contain;
  position: absolute;
}
.about__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 2rem;
}

.about__container p {
  font-size: 20px;
}

.img {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  grid-template-rows: repeat(2, 1fr);
}

.img img {
  border-radius: 10%;
  box-shadow: 0 2px 10px rgb(139, 139, 139);
}
</style>
