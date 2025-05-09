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
      <router-link to="/projects"><Button buttonText="SEE ALL PROJECTS" isArrow="True"/></router-link>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding-bottom: 2rem;
}
</style>