<script setup>
import Button from "@/components/Button.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="container">
    <div class="layout-container">
      <div class="title">Projects</div>
      <ProjectCard />
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
}
</style>