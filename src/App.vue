<script setup>
import NavBar from "@/components/NavBar.vue";
import Blob from "@/components/Blob.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar class="navbar" />
  <div class="hero">
    <Blob class="blob" />
    <h1 class="title">Interactive Media Designer Oliver Rutz</h1>
  </div>
  <Footer class="footer" />
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.blob {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.title {
  position: relative;
  z-index: 2;
  font-size: 95px;
  font-weight: 600;
  text-align: left;
  color: #000;
  margin-top: auto;
  padding: 0 40px 40px;
}
</style>
