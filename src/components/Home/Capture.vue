<template>
  <div class="h q-my-lg">
    <div class="wrappp q-pa-lg q-my-xl container">
      <div class="det">
        <h3 class="text-primary text-weight-bold">
          Capture the Beautiful Moments
        </h3>
        <p class="q-my-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          autem necessitatibus obcaecati a! Facilis ad omnis esse sunt?
          Temporibus, numquam?
        </p>

        <div class="btns q-my-md">
          <q-btn class="bg-primary q-px-lg q-py-lg text-negative"
            >View Services</q-btn
          >

          <div class="btn q-py-lg">
            <i class="text-primary fa-3x far fa-play-circle"></i>
            <span>See how capture the moment made</span>
          </div>
        </div>
      </div>

      <div class="big">
        <img class="bi" src="images/kano.png" alt="" />
      </div>
      <div class="img small">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
          alt=""
        />
      </div>
      <div class="img small">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
          alt=""
        />
      </div>
      <div class="img small">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrappp {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.65rem;
  grid-template-areas:
    "p p p big big"
    "p p p big big"
    "small1 small2 small3 big big";
}

.btn {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.btn i {
  margin-right: 0.55rem;
}
.btns {
  display: flex;
  align-items: center;
}

.bi {
  height: 100%;
}

.det {
  grid-area: p;
}
.det p {
  font-size: 20px;
}

.big {
  grid-area: big;
}
.img:nth-child(1) {
  grid-area: small1;
}
.img:nth-child(2) {
  grid-area: small2;
}
.img:nth-child(3) {
  grid-area: small3;
}
</style>
