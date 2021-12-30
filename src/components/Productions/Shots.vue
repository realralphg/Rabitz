<template>
  <div class="h q-py-xl bg-dark">
    <div class="wrapper container">
      <div class="det q-mb-lg">
        <div class="text">
          <h4 class="text-negative">Our best shots</h4>
          <p class="text-negative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            labore.
          </p>
        </div>

        <div class="btn">
          <q-btn class="q-mr-sm bn q-py-sm q-px-xl bg-primary text-negative"
            >2021</q-btn
          >
          <q-btn class="q-mr-sm bn q-py-sm q-px-xl bg-negative text-grey-8"
            >2021</q-btn
          >
          <q-btn class="q-px-xl bn q-py-sm bg-primary text-negative"
            >2021</q-btn
          >
        </div>
      </div>

      <div class="grid">
        <img src="images/kd.png" alt="" />
        <img src="images/kd.png" alt="" />
        <img src="images/kd.png" alt="" />
        <img src="images/kd.png" alt="" />
        <img src="images/kd.png" alt="" />
        <img src="images/kd.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.det {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.btn {
  display: flex;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}

.bn {
  height: 40px !important;
}
</style>
