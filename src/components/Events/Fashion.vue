<template>
  <section class="about bg-dark q-py-xl bg-dark section" id="about">
    <div class="about__container container grid">
      <div class="about__data">
        <h4
          class="
            section__title
            text-weight-bold
            q-mb-md q-pb-lg
            text-negative
            about__title
          "
        >
          Smiles are always in Fashion
          <!-- More Information <br />
              About Us -->
        </h4>

        <p class="about__description text-negative q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>

        <q-btn class="q-px-xl bg-primary q-py-lg text-negative">Explore</q-btn>
      </div>
      <div class="img">
        <img class="big" src="images/about.png" alt="" />
        <img class="mu" src="images/mu.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
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
  position: relative;
  width: 100%;
  height: 100%;
}
.img .big {
  position: relative;
  top: 10%;
  width: 80%;
  height: 70%;
  left: 50%;

  transform: translateX(-50%);
}
.img::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px solid #9d1e81;
  /* top: 17%; */
}

.mu {
  height: 170px;
  width: 170px;
  position: absolute;
  top: 15%;
  left: 0;
}
</style>
