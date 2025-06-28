<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Filter from "@/components/Filter.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { ref } from 'vue'
import { inject } from 'vue'

const initParams = inject('initParams')
const color = initParams.color
const transparentColor = initParams.transparentColor

const scrollToContact = ref<HTMLElement | null>(null)

function scrollTo() {
  scrollToContact.value?.footerRef?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="project-container">
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)" />
    <div class="layout-container">
      <Breadcrumb />
      <div class="title">Projects</div>
      <div class="featured-title">Featured Projects </div>
      <div class="featured-projects">
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'Zurich_Reimagined' }
        }"
            class="link"
        >
          <ProjectCard class="featured-project" imgPath="Zuerich Reimagined/Keyvisual.png" title="" caption=""/>
          <div class="featured-project-title">Zürich Reimagined — IMD-Award-Winner</div>
        </router-link>
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'VA' }
        }"
            class="link"
        >
          <ProjectCard class="featured-project" imgPath="VA/IMG_9794.png" title="" caption=""/>
          <div class="featured-project-title">VA — Der Einfluss von Social Media auf religiöse Praktiken und Glaubensüberzeugungen.</div>
        </router-link>
      </div>
    </div>
    <Filter />
    <Footer ref="scrollToContact" :color="color" :transparentColor="transparentColor" />
  </div>
</template>

<style scoped>
.title {
  font-size: 6.25rem;
  padding-bottom: 1.375rem;
}

.featured-title {
  font-size: 2.5rem;
  padding: 0 0 0.625rem 0;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.featured-projects {
  display: flex;
  gap: 1.25rem;
  padding-bottom: 2.5rem;
}

.featured-project-title {
  font-size: 2.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.project-container {
  padding-top: 2rem;
}

.link {
  text-decoration: none;
  color: black;
  transition: transform 0.3s ease;
  transform-origin: center;
  width: 50%;
}

@media (max-width: 640px) {
  .project-container {
    padding-top: 4.75rem;
  }

  .title {
    font-size: 3.75rem;
    padding-bottom: 0.125rem;
  }

  .featured-title {
    font-size: 1.5rem;
    padding: 0 0 0.75rem 0;
  }

  .featured-projects {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    padding-bottom: 2.5rem;
  }

  .featured-project-title {
    font-size: 1.5rem;
  }

  .project-container {
    padding-top: 4rem;
  }

  .link {
    width: 100%;
  }
}

</style>