<script setup>
</script>

<template>
  <!-- Invisible Debug Button -->
  <router-link to="/home" class="debug-button" active-class="active" exact>Home</router-link>

  <div class="coming-soon">
    <h1>Coming Soon</h1>
    <p>Our website is under construction. Stay tuned!</p>
  </div>
</template>

<style scoped>
.coming-soon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
}

.debug-button {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  opacity: 0;
  z-index: 1000;
}
</style>