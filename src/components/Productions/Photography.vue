<template>
  <div class="holder bg-dark container q-py-xl">
    <div class="slider">
      <h5 class="text-primary text-weight-bold q-my-md">Photography</h5>
      <p class="text-negative q-my-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Facere, vitae.
      </p>
    </div>

    <div class="grid">
      <div class="card">
        <img src="images/kaduna.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
      </div>
      <div class="card">
        <img src="images/kaduna.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
      </div>
      <div class="card">
        <img src="images/kaduna.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
      </div>
      <div class="card">
        <img src="images/kaduna.png" alt="" />
        <p class="q-my-md text-negative">Lorem ipsum dolor sit.</p>
      </div>
    </div>

    <div class="text-center q-pt-lg q-mt-lg">
      <h4 class="text-negative q-mt-lg text-center">
        Let’s help you create your story
      </h4>
      <q-btn
        class="q-px-xl q-my-md bg-primary text-negative text-center q-py-md"
        >Book us Now</q-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
