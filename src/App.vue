<script setup>
import NavBar from "@/components/NavBar.vue";
import Blob from "@/components/Blob.vue";
</script>

<template>
  <NavBar class="navbar"></NavBar>
  <div class="container">
    <Blob></Blob>
  </div>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
