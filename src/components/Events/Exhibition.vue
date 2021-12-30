<template>
  <section class="about bg-dark q-py-lg bg-dark section" id="about">
    <div class="about__container container grid">
      <div class="img">
        <img class="big" src="images/exhibition.png" alt="" />
      </div>
      <div class="about__data">
        <h2
          class="
            section__title
            text-weight-bold
            q-mb-md q-pb-md
            text-negative
            about__title
          "
        >
          Exhibitions
          <!-- More Information <br />
              About Us -->
        </h2>

        <p class="about__description text-negative q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>

        <div class="hold q-mt-xl">
          <div class="wrappe">
            <div class="hello">
              <img src="/images/sma.png" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <p class="text-negative q-my-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              velit impedit, nemo voluptatem accusantium similique!
            </p>
          </div>
          <div class="wrappe">
            <div class="hello">
              <img src="/images/sma.png" alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <p class="text-negative q-my-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              velit impedit, nemo voluptatem accusantium similique!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid q-py-xl container">
      <div class="card">
        <img src="images/ex1.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
      </div>
      <div class="card">
        <img src="images/ex2.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
      </div>
      <div class="card">
        <img src="images/ex3.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
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

.hold {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.hello {
  display: flex;
  gap: 1rem;
  background-color: #fff;
  padding: 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.45rem;
}

.grid img {
  width: 80%;
}
</style>
