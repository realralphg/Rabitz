<template>
  <section class="about q-py-xl bg-negative flexx section" id="about">
    <div class="about__container container grid">
      <div class="img">
        <img src="images/about.png" alt="" />
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
          We can’t wait to share your story
          <!-- More Information <br />
              About Us -->
        </h3>

        <p class="about__description q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>
        <q-btn class="bg-primary btn q-px-xl q-py-md text-negative button"
          >Book Us</q-btn
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
  left: 10%;
  width: 80%;
  height: 70%;
  z-index: 3;
  /* transform: translateX(-25%); */
}

.img::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #9d1e81;
  top: 17%;
  z-index: 2;
}

.btn {
  width: 70%;
  margin-left: -10%;
  position: relative;
  z-index: 1;
}
</style>
