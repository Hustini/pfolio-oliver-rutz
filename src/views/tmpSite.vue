<script setup>
</script>

<template>
  <div class="coming-soon">
    <h1>Coming Soon</h1>
    <p>Our website is under construction. Stay tuned!</p>

    <!-- Invisible Debug Button -->
    <router-link to="/home" class="debug-button" active-class="active" exact>Home</router-link>
  </div>
</template>

<style scoped>
.coming-soon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
}

.debug-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  opacity: 0;
  z-index: 1000;
}
</style>
