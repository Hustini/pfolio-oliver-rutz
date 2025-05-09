<script setup>
import Button from "@/components/Button.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="container">
    <div class="layout-container">
      <div class="title">Projects</div>
      <div class="projects">
        <ProjectCard imgPath="/img/placeholder.png" title="Tsalskdflasdfhj" caption="dfalsdfhlaskj"/>
        <ProjectCard imgPath="/img/placeholder.png" title="Tsalskdflasdfhj" caption="dfalsdfhlaskj"/>
        <ProjectCard imgPath="/img/placeholder.png" title="Tsalskdflasdfhj" caption="dfalsdfhlaskj"/>
      </div>
      <Button buttonText="SEE ALL PROJECTS" isArrow="True"/>
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

.layout-container > *:not(:first-child) {
  margin-top: 2rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}
</style>