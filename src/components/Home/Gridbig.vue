<template>
  <h2 class="text-weight-bold text-center container text-dark">
    Wetin dey pl<i class="far fa-play-circle text-primary"></i>ay
  </h2>
  <div class="h q-my-lg">
    <div class="wapper container bg-grey-12 q-pa-lg q-my-xl">
      <div class="wrapie">
        <div class="hero">
          <img src="/images/homebb.png" alt="" />
        </div>

        <div class="imgs">
          <div class="flexx">
            <img src="/images/home5.png" alt="" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home6.png" alt="" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home7.png" alt="" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home8.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home1.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home2.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home3.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home4.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home5.png" alt="" />
            <p>consectetur, adipisicing elit. Libero placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home6.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
        </div>
        <div class="imgs">
          <div class="flexx">
            <img src="/images/home7.png" alt="" />
            <p>Lorem ipsum dolor sit amet placeat?</p>
          </div>
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
  gap: 0.5rem;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "big big big small1 small2 "
    "big big big  small3 small4   "
    "big big big  small5 small6"
    "small7 small8 small9 small10 small11";
}

.hero {
  grid-area: big;
  width: 100%;
  height: 90%;
  padding: 0.25rem;
}

.imgs {
  padding: 0.25rem;
  display: flex;
}

.flexx {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  padding: 1rem;
}
.flexx img {
  width: 60%;
  height: 100%;
}
.flexx p {
  font-size: 10px;
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
.imgs:nth-child(5) {
  grid-area: small5;
}
.imgs:nth-child(6) {
  grid-area: small6;
}
.imgs:nth-child(7) {
  grid-area: small7;
}
.imgs:nth-child(8) {
  grid-area: small8;
}
.imgs:nth-child(9) {
  grid-area: small9;
}
.imgs:nth-child(10) {
  grid-area: small10;
}
.imgs:nth-child(11) {
  grid-area: small11;
}
</style>
