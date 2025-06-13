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
      if (this.firstClick) {
        // .every works on arrays and this.tags is an object
        return Object.values(this.tags).every(val => val === true);
      }
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
      this.selectedTags = [];
      for (let tag in this.tags) {
        this.tags[tag] = true;
      }
      this.firstClick = true;
    }
  }
}
</script>

<template>
  <div class="filter layout-container">
    <div class="title">Filter</div>
    <div class="filter-buttons">
      <span><Button :class="['button', { toggled : !allTagsActive && tags.web }]" buttonText="WEB" @click="toggleTag('web');"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.installation }]" buttonText="INSTALLATION" @click="toggleTag('installation')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.UX }]" buttonText="UX/UI" @click="toggleTag('UX')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.print }]" buttonText="PRINT" @click="toggleTag('print')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.video }]" buttonText="VIDEO" @click="toggleTag('video')"/></span>
      <span><Button class="reset-button button" buttonText="Reset Filter" @click="reset()"/></span>
    </div>
    <div class="projects">
      <ProjectCard imgPath="/img/placeholder.png" title="WEB" caption="dfalsdfhlaskj" :tag="tags.web"/>
      <ProjectCard imgPath="/img/placeholder.png" title="Installation" caption="dfalsdfhlaskj" :tag="tags.installation"/>
      <ProjectCard imgPath="/img/placeholder.png" title="UX/UI" caption="dfalsdfhlaskj" :tag="tags.UX"/>
      <ProjectCard imgPath="/img/placeholder.png" title="Print" caption="dfalsdfhlaskj" :tag="tags.print"/>
      <ProjectCard imgPath="/img/placeholder.png" title="Video" caption="dfalsdfhlaskj" :tag="tags.video"/>
    </div>
  </div>
</template>

<style scoped>
.filter {
  border-top: black solid 1px;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 2rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  gap: 1rem;
}

.toggled {
  background: #7717F44D;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 2rem
}

.reset-button {
  border: none;
}

@media (max-width: 640px) {
  .button {
    width: auto
  }

  .filter {
    border-top: black solid 1px;
    padding: 1rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom: 1rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 2rem
  }

  .reset-button {
    border: none;
  }
}
</style>