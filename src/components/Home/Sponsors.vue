<template>
  <section class="sponsor q-py-lg q-pb-lg section">
    <div class="big">
      <div class="det q-my-lg">
        <h2 class="text-center text-primary q-my-md text-weight-bold">
          Our Sponsors
        </h2>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus!
        </p>
      </div>

      <div class="sponsor__container bg-grey-12 q-pa-xl grid">
        <div class="sponsor__content">
          <img src="/images/Group 34636.png" alt="" class="sponsor__img" />
        </div>
        <div class="sponsor__content">
          <img src="/images/google logo.png" alt="" class="sponsor__img" />
        </div>
        <div class="sponsor__content">
          <img
            src="/images/Meta-Logо-500x281 1.png"
            alt=""
            class="sponsor__img"
          />
        </div>
        <div class="sponsor__content">
          <img
            src="/images/NITDA-logo-newest-1-removebg-preview 1.png"
            alt=""
            class="sponsor__img"
          />
        </div>
        <div class="sponsor__content">
          <img src="/images/pngwing 1.png" alt="" class="sponsor__img" />
        </div>
        <div class="sponsor__content">
          <img src="/images/Group 34637.png" alt="" class="sponsor__img" />
        </div>
        <div class="sponsor__content">
          <img src="/images/ibm.png" alt="" class="sponsor__img" />
        </div>
        <div class="sponsor__content">
          <img src="/images/Frame 38251.png" alt="" class="sponsor__img" />
        </div>
      </div>
      <div class="btn q-my-lg text-center">
        <q-btn class="bg-primary q-px-xl q-py-md text-negative"
          ><i class="fas q-mr-lg fa-plus"></i> Become a Sponsor</q-btn
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.sponsor__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  justify-items: center;
  align-items: center;
  row-gap: 3.5rem;
}

.sponsor__img {
  width: 90px;
  /* filter: invert(0.7); */
  transition: var(--img-transition);
}

.sponsor__content:hover .sponsor__img {
  /* filter: invert(0.5); */
  transform: scaleX(1.2);
  cursor: pointer;
}
</style>
