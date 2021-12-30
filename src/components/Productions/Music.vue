<template>
  <section class="about q-py-lg bg-negative section" id="about">
    <div class="about__container container grid">
      <div class="about__data">
        <h4
          class="
            section__title
            text-weight-bold
            q-mb-md
            text-primary
            about__title
          "
        >
          Music / Audio Production
          <!-- More Information <br />
              About Us -->
        </h4>

        <p class="about__description q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>
      </div>
      <div class="img">
        <img src="images/music.png" alt="" />
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
