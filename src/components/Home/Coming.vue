<template>
  <div class="h q-py-xl bg-dark">
    <h6 class="container text-negative">Coming Soon</h6>
    <div class="wrapper container">
      <div class="long">
        <img src="/images/cala.png" alt="" />
      </div>
      <div class="longe">
        <img src="/images/cala2.png" alt="" />
      </div>
      <div class="short">
        <p class="text-weight-bold">Lorem, ipsum dolor.</p>
      </div>
      <div class="shortt">
        <p class="text-weight-bold">Lorem, ipsum dolor.</p>
      </div>
    </div>
    <div class="btn text-center">
      <q-btn class="text-negative text-center q-px-xl q-my-md bg-primary">
        View All
      </q-btn>
      <img class="arrow" src="images/ar.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  position: relative;
}
.arrow {
  width: 70px;
  height: 70px;
  object-fit: contain;
  position: absolute;
  bottom: -70%;
  right: 35%;
}
.container {
  margin-bottom: 0.65rem !important ;
}
.wrapper {
  display: grid;
  position: relative;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-template-areas:
    "long long long short "
    "longe longe  longe shortt   ";
}

.short {
  background: url("/images/davido.png"), center center/cover no-repeat;
  grid-area: short;
  position: relative;
  height: 100%;
}

.shortt::before,
.short::before {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  content: "";
  background: rgba(165, 163, 163, 0.55);
}
.long {
  grid-area: long;
}
.longe {
  grid-area: longe;
}

.long img,
.longe img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.shortt {
  grid-area: shortt;
  position: relative;
  background: url("/images/burna.png"), center center/cover no-repeat;
  height: 100%;
}

.short p,
.shortt p {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
}
</style>
