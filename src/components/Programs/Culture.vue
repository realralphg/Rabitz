<template>
  <section class="about q-py-xl bg-negative flexx section" id="about">
    <div class="about__container container grid">
      <div class="img">
        <img src="images/bau.png" alt="" />
      </div>
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
          Culture and Life
          <!-- More Information <br />
              About Us -->
        </h3>

        <p class="about__description q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>
        <q-btn class="bg-primary q-px-lg q-py-md text-negative button"
          >Watch full video</q-btn
        >
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
}
.img img {
  position: relative;

  width: 80%;
  /* transform: translateX(-25%); */
}
</style>
