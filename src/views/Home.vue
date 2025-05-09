<script setup>
import InfoSection from "@/components/InfoSection.vue";
import Blob from "@/components/Blob.vue";
import Footer from "@/components/Footer.vue";
import ProjectParent from "@/components/ProjectParent.vue";
</script>

<template>
  <div class="home">
    <div class="layout-container hero-content">
      <Blob class="blob" width="400px" height="400px" />
      <h1 class="title">Interactive Media Designer Oliver Rutz</h1>
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z" data-name="2-Arrow Down"/>
      </svg>
    </div>
    <InfoSection />
    <ProjectParent />
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.home {
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
  margin-top: auto;
  padding: 1rem 0;
}

.arrow {
  position: absolute;
  bottom: 13.5%;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
}
</style>