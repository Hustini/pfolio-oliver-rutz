<script setup>
import InfoSection from "@/components/InfoSection.vue";
import Blob from "@/components/Blob.vue";
import Footer from "@/components/Footer.vue";
import ProjectParent from "@/components/ProjectParent.vue";
</script>

<template>
  <div class="hero">
    <div class="layout-container hero-content">
      <Blob class="blob" width="400px" height="400px" />
      <h1 class="title">Interactive Media Designer Oliver Rutz</h1>
    </div>
    <InfoSection />
    <ProjectParent />
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: white;
}

.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  justify-content: center;
}

.blob {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}

.title {
  position: relative;
  z-index: 1;
  font-size: 6rem;
  font-weight: 400;
  text-align: left;
  color: #000;
  border: 2px solid black;
  margin-top: auto;
  padding: 1rem 0;
}
</style>