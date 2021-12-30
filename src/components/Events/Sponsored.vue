<template>
  <section class="about q-my-xl q-py-lg section" id="about">
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
          Our Sponsored Events
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
      </div>
      <div class="img">
        <img src="images/woman.png" alt="" />
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
  left: 10%;
  width: 80%;
  /* transform: translateX(-25%); */
}
.img::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70%;
  background: #9d1e81;
  top: 17%;
}
</style>
