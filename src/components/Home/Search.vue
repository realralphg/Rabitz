<template>
  <div class="input-email container q-mb-md">
    <div class="input">
      <input placeholder="Search Here" type="text" />
      <button class="text-negative">Search</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-email .input {
  margin-top: 6rem;
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: #1d1d1d;
  padding: 0.55rem;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.input-email input {
  border: none;
  /* background: rgba(229, 229, 229, 0.4); */
  background: none;
  width: 100%;
}

.input-email button {
  border: none;
  background: #9d1e81;
  padding: 0.65rem;
  font-size: 14px;
  color: #fff;
  border-radius: 8px;
}
</style>
