<template>
  <section class="about q-py-xl bg-negative flexx section" id="about">
    <div class="about__container container grid">
      <div class="img">
        <img src="images/about.png" alt="" />
        <ul>
          <li class="first">Sound Mixing</li>
          <li class="">Music Production</li>
          <li class="">Editing Studio</li>
          <li class="">Recording Hall</li>
        </ul>
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
          Sound Mixing
          <!-- More Information <br />
              About Us -->
        </h3>

        <p class="about__description q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>
        <q-btn class="bg-primary q-px-lg q-py-md text-negative button"
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
  /* transform: translateX(-25%); */
}

.img ul {
  position: absolute;
  top: 0;
  left: 0;
  background: #9d1e81;
  height: 60%;
  padding-left: 0.55rem;
  width: 60%;
}

.img ul li {
  margin: 1rem 0;
  padding: 0.35rem;
  color: #fff;
}
.img ul li:first-child {
  margin: 0.35rem 0;
  padding: 0.75rem;
  background: #fff;
  color: #000;
}
</style>
