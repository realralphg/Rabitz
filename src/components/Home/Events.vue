<template>
  <div class="det bg-primary q-pa-lg">
    <div class="h q-mb-md">
      <h4 class="text-negative text-center text-weight-bold">Events</h4>
      <p class="text-negative text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
        voluptatum.
      </p>
    </div>

    <div class="grid container">
      <div class="card">
        <h4>24th Jan,2022</h4>
        <p>Lorem ipsum dolor sit.</p>

        <img
          class="q-mb-md"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg"
          alt=""
        />
        <q-separator class="bg-primary sep" />

        <p class="q-mt-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa earum debitis eveniet. Nesciunt quibusdam blanditiis maxime
          nulla ratione minima.
        </p>

        <q-btn class="bg-primary q-px-xl q-py-md text-negative">
          Learn More <i class="fas q-ml-lg fa-chevron-right"></i
        ></q-btn>
      </div>
      <div class="card">
        <h4>24th Jan,2022</h4>
        <p>Lorem ipsum dolor sit.</p>

        <img
          class="q-mb-md"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg"
          alt=""
        />
        <q-separator class="bg-primary sep" />

        <p class="q-mt-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa earum debitis eveniet. Nesciunt quibusdam blanditiis maxime
          nulla ratione minima.
        </p>

        <q-btn class="bg-primary q-px-xl q-py-md text-negative">
          Learn More <i class="fas q-ml-lg fa-chevron-right"></i
        ></q-btn>
      </div>
      <div class="card">
        <h4>24th Jan,2022</h4>
        <p>Lorem ipsum dolor sit.</p>

        <img
          class="q-mb-md"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg"
          alt=""
        />
        <q-separator class="bg-primary sep" />

        <p class="q-mt-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa earum debitis eveniet. Nesciunt quibusdam blanditiis maxime
          nulla ratione minima.
        </p>

        <q-btn class="bg-primary q-px-xl q-py-md text-negative">
          Learn More <i class="fas q-ml-lg fa-chevron-right"></i
        ></q-btn>
      </div>
      <div class="card">
        <h4>24th Jan,2022</h4>
        <p>Lorem ipsum dolor sit.</p>

        <img
          class="q-mb-md"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg"
          alt=""
        />
        <q-separator class="bg-primary sep" />

        <p class="q-mt-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa earum debitis eveniet. Nesciunt quibusdam blanditiis maxime
          nulla ratione minima.
        </p>

        <q-btn class="bg-primary q-px-xl q-py-md text-negative">
          Learn More <i class="fas q-ml-lg fa-chevron-right"></i
        ></q-btn>
      </div>
    </div>

    <div class="btn q-my-xl text-center">
      <q-btn class="bg-negative text-center q-px-xl q-py-md text-primary">
        View All <i class="fas q-ml-lg fa-chevron-right"></i
      ></q-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
  position: relative;
  /* padding: 1rem; */
}
.card {
  /* position: relative;
  left: -300px; */
  /* background-color: #e4e4e4; */
  background-color: #ffff;
  color: var(--text-color);
  padding: 1rem;
  border: 2px solid rgba(77, 77, 77, 0.18);
  min-height: 300px;
  min-width: 250px;

  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  /* opacity: 0.25 !important; */
}

.card:hover {
  transform: scale(1.1) !important;
}
.card:nth-child(2),
.card:nth-child(3) {
  position: relative;
  top: 10%;
  margin-bottom: 3.5rem;
}
.sep {
  height: 3px !important;
  width: 60%;
}
</style>
