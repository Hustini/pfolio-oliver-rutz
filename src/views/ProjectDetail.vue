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
    <div class="layout-container">
      <div class="padding-bottom">
        <Breadcrumb />
      </div>
      <div class="project">
        <div class="project-info">
          <div class="wrapper"> <!--Besser Platzieren -->
            <ProjectCard :imgPath="imgPath" title="" caption=""/>
            <div class="title">{{ title }}</div>
          </div>
          <div class="wrapper">
            Tags: <Button class="tag" v-for="tag in tagsSplit" :buttonText="tag"/>
          </div>
          <div class="wrapper">
            Zeitraum: {{ time }}
          </div>
        </div>
        <div class="project-text">
          <div>{{ text }}</div>
          <a :href="link" target="_blank" class="link">{{ link }}</a>
        </div>
      </div>
    </div>
    <Footer ref="scrollToContact" />
  </div>
</template>

<style scoped>
.padding-bottom {
  padding-bottom: 2rem;
}

.project {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.project-info {
  max-width: 50%;
  min-width: 50%;
}

.project-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  padding-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
}

.wrapper {
  font-size: 40px;
  padding-bottom: 2rem;
}

.tag {
  background: #7717F44D;
  margin-right: 1rem;
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
    padding-top: 1rem;
    padding-bottom: 1rem;
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

  .wrapper {
    font-size: 20px;
    padding-bottom: 1rem;
  }

  .tag {
    background: #7717F44D;
    margin-right: 0.5rem;
    padding: 5px 10px;
    font-size: 12px;
    width: auto;
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