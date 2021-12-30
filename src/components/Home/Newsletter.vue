<template>
  <div class="wrapper text-center q-pa-xl">
    <div class="h q-py-lg bg-primary">
      <q-separator class="bg-negative sep" />
      <h2 class="text-negative q-my-lg text-weight-bold">
        Subscribe To Our Newsletter
      </h2>
      <p class="text-negative q-my-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt aut
        quos in dolore, <br />
        totam cupiditate culpa recusandae? Voluptatum, nihil magnam.
      </p>

      <div class="input">
        <input type="text" name="" id="" placeholder="Your Email" />
        <q-btn class="bg-dark btn text-negative">Subscribe</q-btn>
      </div>

      <q-separator class="bg-negative sep" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.h {
  margin: 0 auto;
  box-shadow: 0px 15px 20px -1px rgba(157, 30, 129, 0.75);
  -webkit-box-shadow: 0px 15px 20px -1px rgba(157, 30, 129, 0.75);
  -moz-box-shadow: 0px 15px 20px -1px rgba(157, 30, 129, 0.75);
}
.sep {
  margin: 2rem auto;

  width: 60%;
}

.input input {
  border: none;
  width: 100%;
  color: #878787;
}

.input {
  background: #ffffff;
  /* Grey/Light */

  border: 1px solid #d1d5cc;
  box-sizing: border-box;
  border-radius: 10px;
  width: 60%;
  margin: 1rem auto;
  display: flex;
  padding: 0.3rem;
}

.btn {
  border: none;
  padding: 1rem;
}
</style>
