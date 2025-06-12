<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import Button from "@/components/Button.vue";
</script>

<script>
export default {
  data() {
    return {
      tags: {
        web: true,
        installation: true,
        UX: true,
        print: true,
        video: true,
      }
    };
  },
  methods: {
    toggleTag(tagName) {
      this.tags[tagName] = !this.tags[tagName];
      console.log(`${tagName} toggled to`, this.tags[tagName]);
    }
  }
}
</script>

<template>
  <div>
    <h1>Filter</h1>
    <div class="filter-buttons">
      <span><Button buttonText="WEB" @click="toggleTag('web')"/></span>
      <span><Button buttonText="INSTALLATION" @click="toggleTag('installation')"/></span>
      <span><Button buttonText="UX/UI" @click="toggleTag('UX')"/></span>
    </div>
    <div class="projects">
      <ProjectCard imgPath="/img/placeholder.png" title="WEB" caption="dfalsdfhlaskj" :tag="tags.web"/>
      <ProjectCard imgPath="/img/placeholder.png" title="Installation" caption="dfalsdfhlaskj" :tag="tags.installation"/>
      <ProjectCard imgPath="/img/placeholder.png" title="UX/UI" caption="dfalsdfhlaskj" :tag="tags.UX"/>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding-bottom: 2rem;
}
</style>