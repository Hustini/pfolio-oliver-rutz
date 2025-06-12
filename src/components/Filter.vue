<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import Button from "@/components/Button.vue";
</script>

<script>
export default {
  data() {
    return {
      toggled: false,
      firstClick: true,
      selectedTags: [],
      tags: {
        web: true,
        installation: true,
        UX: true,
        print: true,
        video: true,
      }
    };
  },
  computed: { // computed only re-evaluate when the dependencies change
    allTagsActive() {
      // .every works on arrays and this.tags is an object
      return Object.values(this.tags).every(val => val === true);
    },
  },
  methods: { // methods re-evaluate every call
    toggleTag(tagName) {
      // handles the first click
      if (this.firstClick) {
        this.selectedTags.push(tagName);
        for (let tag in this.tags) {
          this.tags[tag] = (tag === tagName);
        }
        this.firstClick = false;
        return;
      }
      // toggle for the different tags
      if (this.selectedTags.includes(tagName)) {
        this.tags[tagName] = false;
        this.selectedTags = this.selectedTags.filter((tag) => tag !== tagName);
      } else {
        this.tags[tagName] = true;
        this.selectedTags.push(tagName);
      }
      // handles if no tag is selected
      if (this.selectedTags.length === 0 && this.firstClick === false) {
        for (let tag in this.tags) {
          this.tags[tag] = true;
        }
        this.firstClick = true;
      }
    },
    reset() {
      console.log("Stuff")
    }
  }
}
</script>

<template>
  <div>
    <h1>Filter</h1>
    <div class="filter-buttons">
      <span><Button :class="{ toggled : !allTagsActive && tags.web }" buttonText="WEB" @click="toggleTag('web'); reset()"/></span>
      <span><Button :class="{ toggled : !allTagsActive && tags.installation }" class="button" buttonText="INSTALLATION" @click="toggleTag('installation')"/></span>
      <span><Button :class="{ toggled : !allTagsActive && tags.UX }" class="button" buttonText="UX/UI" @click="toggleTag('UX')"/></span>
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

.toggled {
  background: #7717F44D;
}
</style>