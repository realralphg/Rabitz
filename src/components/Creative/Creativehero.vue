<template>
  <div class="hero">
    <h1 class="text-weight-bold text-center text-negative">
      CREATIVE <br />
      CONTENTS
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background: url("/images/bat.png"), center center/cover no-repeat;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
}
.hero::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    173.89deg,
    #310026 20.42%,
    rgba(0, 0, 0, 0) 89.14%
  );
}

.hero h1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
</style>
