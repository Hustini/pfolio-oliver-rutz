<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from "@/components/NavBar.vue";
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Button from '@/components/Button.vue';
import { inject } from 'vue'
import projects from '../assets/projects.json';

const initParams = inject('initParams')
const color = initParams.color
const transparentColor = initParams.transparentColor

const route = useRoute();
const projectKey = route.query.project as string || '';
const projectData = projects[projectKey] || {};

const {
  imgPath = '',
  awardImage = '',
  title = '',
  tags = '',
  time = '',
  text = '',
  link = '',
  images = [],
  videos = []
} = projectData;

const tagsSplit = tags.split(',').filter(t => t.trim() !== '');

const scrollToContact = ref<HTMLElement | null>(null)
function scrollTo() {
  scrollToContact.value?.footerRef?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="page-container">
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)" />
    <div class="padding-bottom layout-container">
      <Breadcrumb :lastItem="title"/>
    </div>
    <div class="project">
      <div class="project-wrapper layout-container">
        <ProjectCard class="project-card" :imgPath="imgPath" :awardImg="awardImage" title="" caption="" :disableHover=true />
      </div>
      <div class="project-info">
        <div class="project-info-item layout-container">
          <div class="title">{{ title }}</div>
          <div class="info-wrapper">
            <div class="info-item">
              <span>Tags:</span><Button class="tag" v-for="tag in tagsSplit" :buttonText="tag"/>
            </div>
            <div class="info-item">
              Zeitraum: {{ time }}
            </div>
          </div>
        </div>
        <div class="project-text">
          <div v-for="(line, idx) in text.split('\n')" :key="idx">{{ line }}</div>
          <a v-if="link !== ''" :href="link" target="_blank" class="link">{{ link }}</a>
        </div>
      </div>
      <div class="project-images layout-container" v-if="images.length || videos.length">
        <img v-for="(img, index) in images" :key="index" :src="img" class="project-image" :alt="'Image ' + (index + 1)" />
        <video v-if="videos.length" class="project-image" controls>
          <source v-for="(video, index) in videos" :key="index" :src="video" type="video/mp4">
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
    <Footer ref="scrollToContact" :color="color" :transparentColor="transparentColor" />
  </div>
</template>

<style scoped>
.padding-bottom {
  padding-bottom: 0.625rem;
}

.project-card {
  width: 100%;
}

.project-info {
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: baseline;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 1.375rem;
}

.project-info-item {
  width: 50%;
  padding: 0 0 0 3.75rem;
}

.project-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  padding: 0 3.75rem 0 0;
  width: 50%;
  line-height: 22px;
}

.project-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 120px;
}

.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.title {
  font-size: 4.7rem;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 88px;
}

.info-wrapper {
  font-size: 20px;
  padding: 1.125rem 0 1.375rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-bottom: black solid 1px;
}

.info-item span{
  padding: 0 0.625rem 0 0;
}

.tag {
  background: #7717F44D;
  margin-right: 0.625rem;
  pointer-events: none;
  font-size: 12px;
  padding: 5px 10px;
}

.link {
  text-decoration: none;
  color: black;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  display: inline-block;
  max-width: 100%;
}

.link:hover {
  font-style: italic;
}

@media (max-width: 640px) {
  .page-container {
    padding-top: 4.75rem;
  }

  .padding-bottom {
    padding-bottom: 0.75rem;
  }

  .project {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .project-info-item {
    width: 100%;
    padding: 0 1.25rem;
  }

  .project-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    padding: 2.5rem 1.25rem;
    width: 100%;
    border-top: black solid 1px;
  }

  .project-info {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-top: 0.25rem;
    padding-bottom: 0;
  }

  .project-images {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.25rem;
    border-top: black solid 1px;
    margin-bottom: 0;
  }

  .title {
    font-size: 1.5rem;
    padding: 0.75rem 0 0 0;
    line-height: normal;
  }

  .info-wrapper {
    font-size: 20px;
    padding: 0.75rem 0 1.25rem 0;
    border-bottom: none;
  }

  .tag {
    background: #7717F44D;
    margin-right: 0.5rem;
    padding: 5px 10px;
    font-size: 12px;
    width: auto;
    pointer-events: none;
  }

  .link {
    text-decoration: none;
    color: black;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: inline-block;
    max-width: 100%;
  }
}

@media (min-width: 641px) and (max-width: 860px) {
  .page-container {
    padding-top: 4.75rem;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 0;
  }

  .project-info-item {
    width: 100%;
    padding: 0 1.25rem;
  }

  .project-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    padding: 2.5rem 1.25rem;
    width: 100%;
    border-top: black solid 1px;
    border-bottom: black solid 1px;
  }

  .info-wrapper {
    font-size: 20px;
    padding: 1.125rem 0 1.375rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-bottom: none;
  }

  .project-images {
    padding-top: 2.5rem;
  }
}

@media (min-width: 861px) and (max-width: 1024px) {
  .page-container {
    padding-top: 4.75rem;
  }

  .project-info-item {
    padding: 0 0 0 1.25rem;
  }

  .project-text {
    padding: 0 1.25rem 0 0 ;
  }
}

@media (min-width: 1536px) {
  .project-info-item {
    padding: 0 0 0 4rem;
  }

  .project-text {
    padding: 0 4rem 0 0 ;
  }
}
</style>