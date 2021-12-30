<template>
  <div class="wapper container q-my-xl">
    <h2 class="text-weight-bold text-center q-my-sm text-dark">
      Rabbitz <span class="text-primary">Studios</span>
    </h2>
    <div class="wrapie">
      <div class="hero">
        <img src="/images/homeb.png" alt="" />
      </div>

      <div class="imgs">
        <img src="/images/home2.png" alt="" />
      </div>
      <div class="imgs">
        <img src="/images/home1.png" alt="" />
      </div>
      <div class="imgs">
        <img src="/images/home4.png" alt="" />
      </div>
      <div class="imgs">
        <img src="/images/home3.png" alt="" />
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
  width: 100%;
}

.imgs img {
  width: 100%;
  height: 180px;
  object-fit: cover;
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
