<script setup>
</script>

<template>
  <div class="blob"></div>
</template>

<style scoped>
.blob {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle at 75% 25%,
  rgba(0, 255, 64, 1) 0%,
  rgba(0, 255, 64, 1) 10%,
  rgb(119, 23, 244) 70%);
  filter: blur(30px);
  box-shadow: 0 0 40px rgba(0, 255, 64, 0.4), 0 0 60px rgba(119, 23, 244, 0.4);
}
</style>