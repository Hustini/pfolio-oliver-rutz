<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from "@/components/NavBar.vue";
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Button from '@/components/Button.vue';

const route = useRoute();
const imgPath = route.params.imgPath;
const title = route.params.title;
const tags = route.params.tags;
const tagsSplit = tags.split(",").filter(t => t.trim() !== "");
const time = route.params.time;
const text = decodeURIComponent(route.params.text);
const link = route.params.link;

const scrollToContact = ref<HTMLElement | null>(null)
function scrollTo() {
  scrollToContact.value?.footerRef?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="page-container">
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)" />
    <div class="padding-bottom layout-container">
      <Breadcrumb />
    </div>
    <div class="project">
      <div class="layout-container">
        <div class="project-wrapper">
          <ProjectCard class="project-card" :imgPath="imgPath" title="" caption=""/>
        </div>
        <div class="project-info">
          <div class="project-info-item">
            <div class="title">{{ title }}</div>
            <div class="info-wrapper">
              <div class="info-item">
                Tags: <Button class="tag" v-for="tag in tagsSplit" :buttonText="tag"/>
              </div>
              <div class="info-item">
                Zeitraum: {{ time }}
              </div>
            </div>
          </div>
          <div class="project-text">
            <div>{{ text }}</div>
            <a :href="link" target="_blank" class="link">{{ link }}</a>
          </div>
        </div>
      </div>
    </div>
    <Footer ref="scrollToContact" />
  </div>
</template>

<style scoped>
.padding-bottom {
  padding-bottom: 0.5rem;
}

.project {

}

.project-card {
  width: 100%;
}

.project-info {
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;
}

.project-info-item {
  width: 50%;
}

.project-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  padding-bottom: 2rem;
  width: 50%;
}

.title {
  font-size: 4.7rem;
  word-break: break-all;
}

.project-wrapper {
  margin-top: 0;
  padding: 0;
}

.info-wrapper {
  font-size: 20px;
  padding: 1.125rem 0 1.375rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  border-bottom: black solid 1px;
  margin-bottom: 2rem;
}

.info-item {

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

@media (max-width: 640px) {
  .page-container {
    padding-top: 4rem;
  }

  .padding-bottom {
    padding-bottom: 1rem;
  }

  .project {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .project-text {
    font-size: 1rem;
    padding: 1rem;
    border-top: black solid 1px;
  }

  .project-info {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
  }

  .title {
    font-size: 1.5rem;
  }

  .info-wrapper {
    font-size: 20px;
    padding-bottom: 1rem;
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
</style>