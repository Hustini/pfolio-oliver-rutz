<script setup>
import Button from "@/components/Button.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { ref, defineExpose } from 'vue'
import projects from '../assets/projects.json';

const teaserRef = ref(null)
defineExpose({ teaserRef })
</script>

<template>
  <div class="container" ref="teaserRef">
    <div class="layout-container">
      <div class="title">Projects</div>
      <div class="projects">
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'Zurich_Reimagined' }
        }"
            class="link"
        >
          <ProjectCard :imgPath="projects.Zurich_Reimagined.imgPath" :placeholder="projects.Zurich_Reimagined.placeholder" :title="projects.Zurich_Reimagined.title" :caption="projects.Zurich_Reimagined.caption"/>
        </router-link>
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'VA' }
        }"
            class="link"
        >
          <ProjectCard :imgPath="projects.VA.imgPath" :placeholder="projects.VA.placeholder" :title="projects.VA.title" :caption="projects.VA.caption"/>
        </router-link>
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'ArcadeBot' }
        }"
            class="link"
        >
          <ProjectCard :imgPath="projects.ArcadeBot.imgPath" :placeholder="projects.ArcadeBot.placeholder" :title="projects.ArcadeBot.title" :caption="projects.ArcadeBot.caption"/>
        </router-link>
      </div>
      <router-link to="/projects"><Button buttonText="SEE ALL PROJECTS" isArrow="True"/></router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: white;
  padding: 2.5rem 0;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  padding: 1.375rem 0;
}

.link {
  text-decoration: none;
  color: black;
}

@media (max-width: 640px) {
  .title {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }

  .container {
    background: white;
    padding: 1.25rem 0 3rem 0;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.625rem;
    padding: 0.625rem 0;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
</style>