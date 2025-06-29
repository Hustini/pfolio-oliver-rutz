<script setup>
import Button from "@/components/Button.vue";
import data from '../assets/about.json';

const props = defineProps({
  transparentColor: {
    type: [String],
    default: "#11FF004D"
  }
})
</script>

<template>
  <div class="info-container" :style="{'background-color': transparentColor}">
    <div class="layout-container text">
      {{ data.teaser }}
    </div>
    <div class="layout-container">
      <router-link to="/about"><Button buttonText="LEARN MORE ABOUT ME" isArrow="True"/></router-link>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  padding: 2.5rem 0;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
}

.text {
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 2rem;
}

@media (max-width: 640px) {
  .text {
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom: 1.25rem;
  }

  .info-container {
    padding: 1.25rem 0;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
  }
}
</style>