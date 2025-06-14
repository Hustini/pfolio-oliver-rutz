<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import NavBar from "@/components/NavBar.vue";
import { ref } from 'vue'
import { useRoute } from 'vue-router';

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
  <div class="project-detail-container">
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)" />
    <div class="layout-container">
      <div class="test">
        <div>{{ imgPath }}</div>
        <div>{{ title }}</div>
        <div>{{ time }}</div>
        <div class="blue" v-for="tag in tagsSplit">{{ tag }}</div>
        <div>{{ text }}</div>
        <div>{{ link }}</div>
      </div>
    </div>
    <Footer ref="scrollToContact" />
  </div>
</template>

<style scoped>
.project-detail-container {
  border-bottom: black solid 1px;
}

.blue {
  color: blue;
}

.test {
  display: flex;
  flex-direction: column;
}
</style>