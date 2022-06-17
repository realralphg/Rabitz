<template>
  <div class="" style="height: 100%">
    <!-- {{ video }} -->
    <q-video :ratio="16 / 9" :src="video.youtube" />
  </div>
</template>

<script>
export default {
  props: ["video"],
};
</script>

<style></style>
