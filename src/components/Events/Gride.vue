<template>
  <div class="h q-my-lg">
    <div class="wrappp q-pt-lg q-mt-xl container">
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
      <div class="img small">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-medium.png"
          alt=""
        />
      </div>
      <div class="det">
        <h3 class="text-primary q-mb-lg text-weight-bold">
          Capture the Beautiful Moments
        </h3>
        <p class="q-my-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          autem necessitatibus obcaecati a! Facilis ad omnis esse sunt?
          Temporibus, numquam?
        </p>

        <div class="btns q-my-md">
          <q-btn class="bg-primary q-px-xl q-py-md hey text-negative"
            >Visit Page</q-btn
          >
        </div>
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  grid-template-areas:
    " big big p p "
    "big big p p"
    "small1 small2 small3 small4";
}

.hey {
  box-shadow: 0px 15px 20px -1px rgba(157, 30, 129, 0.75);
  -webkit-box-shadow: 0px 15px 20px -1px rgba(157, 30, 129, 0.75);
  -moz-box-shadow: 0px 15px 20px -1px rgba(157, 30, 129, 0.75);
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
.img:nth-child(4) {
  grid-area: small4;
}
</style>
