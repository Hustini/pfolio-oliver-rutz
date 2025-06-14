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
const tagsSplit = tags.split(",");
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
          <a :href="link" target="_blank">{{ link }}</a>
        </div>
      </div>
    </div>
    <Footer ref="scrollToContact" />
  </div>
</template>

<style scoped>
.page-container {
  border-bottom: black solid 1px;
}

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
</style>