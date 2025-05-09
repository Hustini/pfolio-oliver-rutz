<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="container">
    <div class="layout-container">
      <div class="title">Projects</div>
      <Button buttonText="SEE ALL PROJECTS" isArrow="true"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: white;
  padding: 2rem 0;
}

.title {
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 2rem;
}
</style>