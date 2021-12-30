<template>
  <div class="h q-mt-xl q-pt-xl bg-dark">
    <div class="wapper container q-pa-lg q-my-xl">
      <div class="det">
        <h4 class="text-weight-bold text-center text-primary">
          Cultural Productions
        </h4>
        <p class="text-negative text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptas.
        </p>
      </div>
      <div class="wrapie">
        <div class="hero">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/wild-hunt-large.jpg"
            alt=""
          />
        </div>

        <div class="imgs">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
            alt=""
          />
        </div>
        <div class="imgs">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
            alt=""
          />
        </div>
        <div class="imgs">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
            alt=""
          />
        </div>
        <div class="imgs">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapie {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "big big small1 small2 "
    "big big  small3 small4   ";
}

.hero {
  grid-area: big;
}

.imgs {
  padding: 0.55rem;
}

.flex {
  display: flex;
}
.imgs:nth-child(1) {
  grid-area: small1;
}
.imgs:nth-child(2) {
  grid-area: small2;
}
.imgs:nth-child(3) {
  grid-area: small3;
}
.imgs:nth-child(4) {
  grid-area: small4;
}
</style>
