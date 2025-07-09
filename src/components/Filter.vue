<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import Button from "@/components/Button.vue";
import projects from '../assets/projects.json';
</script>

<script>
export default {
  data() {
    return {
      showReset: false,
      toggled: false,
      firstClick: true,
      selectedTags: [],
      tags: {
        web: true,
        installation: true,
        UX: true,
        print: true,
        video: true,
        CICD: true,
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
        this.showReset = true;
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
        this.showReset = true;
      }
      // handles if no tag is selected
      if (this.selectedTags.length === 0 && this.firstClick === false) {
        for (let tag in this.tags) {
          this.tags[tag] = true;
        }
        this.firstClick = true;
        this.showReset = false;
      }
    },
    reset() {
      this.selectedTags = [];
      for (let tag in this.tags) {
        this.tags[tag] = true;
      }
      this.firstClick = true;
      this.showReset = false;
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
      <span><Button :class="['button', { toggled : !allTagsActive && tags.CICD }]" buttonText="CI/CD" @click="toggleTag('CICD')"/></span>
      <span class="reset" v-if="showReset === true" @click="reset()">
        <img class="reset-symbol" src="../assets/x_symbol.svg" alt="Reset Icon" />
        <Button class="reset-button button" buttonText="Reset Filter" />
      </span>
    </div>
    <div class="projects">
      <router-link
          v-if="tags.installation === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'ArcadeBot' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.ArcadeBot.imgPath" :placeholder="projects.ArcadeBot.placeholder" :tag="tags.installation" :title="projects.ArcadeBot.title" :caption="projects.ArcadeBot.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true || tags.UX === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'EHCT' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.EHCT.imgPath" :placeholder="projects.EHCT.placeholder" :tag="tags.web" :title="projects.EHCT.title" :caption="projects.EHCT.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true || tags.UX === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Orbit' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Orbit.imgPath" :placeholder="projects.Orbit.placeholder" :tag="tags.web" :title="projects.Orbit.title" :caption="projects.Orbit.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true || tags.UX === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'IPA' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.IPA.imgPath" :placeholder="projects.IPA.placeholder" :tag="tags.web" :title="projects.IPA.title" :caption="projects.IPA.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true || tags.UX === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Jungspund' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Jungspund.imgPath" :placeholder="projects.Jungspund.placeholder" :tag="tags.web" :title="projects.Jungspund.title" :caption="projects.Jungspund.caption"/>
      </router-link>
      <router-link
          v-if="tags.video === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Kim_Trimm' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Kim_Trimm.imgPath" :placeholder="projects.Kim_Trimm.placeholder" :tag="tags.video" :title="projects.Kim_Trimm.title" :caption="projects.Kim_Trimm.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true || tags.UX === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Labor' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Labor.imgPath" :placeholder="projects.Labor.placeholder" :tag="tags.web" :title="projects.Labor.title" :caption="projects.Labor.caption"/>
      </router-link>
      <router-link
          v-if="tags.print === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Spaetsommerfest' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Spaetsommerfest.imgPath" :placeholder="projects.Spaetsommerfest.placeholder" :tag="tags.print" :title="projects.Spaetsommerfest.title" :caption="projects.Spaetsommerfest.caption"/>
      </router-link>
      <router-link
          v-if="tags.print === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Street_Physics' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Street_Physics.imgPath" :placeholder="projects.Street_Physics.placeholder" :tag="tags.print" :title="projects.Street_Physics.title" :caption="projects.Street_Physics.caption"/>
      </router-link>
      <router-link
          v-if="tags.video === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'history_techno' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.history_techno.imgPath" :placeholder="projects.history_techno.placeholder" :tag="tags.video" :title="projects.history_techno.title" :caption="projects.history_techno.caption"/>
      </router-link>
      <router-link
          v-if="tags.print === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'VA' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.VA.imgPath" :placeholder="projects.VA.placeholder" :tag="tags.print" :title="projects.VA.title" :caption="projects.VA.caption"/>
      </router-link>
      <router-link
          v-if="tags.video === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Waterman' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Waterman.imgPath" :placeholder="projects.Waterman.placeholder" :tag="tags.video" :title="projects.Waterman.title" :caption="projects.Waterman.caption"/>
      </router-link>
      <router-link
          v-if="tags.CICD === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Wheeltalk' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Wheeltalk.imgPath" :placeholder="projects.Wheeltalk.placeholder" :tag="tags.CICD" :title="projects.Wheeltalk.title" :caption="projects.Wheeltalk.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true || tags.UX === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'Zurich_Reimagined' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.Zurich_Reimagined.imgPath" :placeholder="projects.Zurich_Reimagined.placeholder" :tag="tags.web" :title="projects.Zurich_Reimagined.title" :caption="projects.Zurich_Reimagined.caption"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.filter {
  border-top: black solid 1px;
  padding: 3.75rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 0.625rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  gap: 1.25rem;
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

.reset {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0 0 1.25rem;
}

.reset-button {
  border: none;
  padding: 10px 0;
}

.reset-symbol {
  width: 10px;
  height: 10px;
}

.link {
  text-decoration: none;
  color: black;
}

@media (max-width: 640px) {
  .button {
    width: auto
  }

  .filter {
    border-top: black solid 1px;
    padding: 2.5rem 1.25rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom: 0.625rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.875rem;
  }

  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 0.625rem
  }

  .reset-button {
    border: none;
  }
}
</style>