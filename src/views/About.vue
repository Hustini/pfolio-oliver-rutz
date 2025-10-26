<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { ref } from 'vue'
import { inject } from 'vue'
import { computed } from 'vue'
import data from '../assets/about.json';

const initParams = inject('initParams')
const color = initParams.color
const transparentColor = initParams.transparentColor

const scrollToContact = ref<HTMLElement | null>(null)

function scrollTo() {
  scrollToContact.value?.footerRef?.scrollIntoView({ behavior: 'smooth' });
}

// Basic markdown-style parser for [text](url)
const parsedText = computed(() => {
  return data.text.replace(/\[([^\]]+)]\((https?:\/\/[^)]+)\)/g, (match, text, url) => {
    return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer" style="color: black; text-decoration: underline;">${text}</a>`
  }).replace(/\n/g, '<br>')
})
</script>

<template>
  <div>
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)"/>
    <div class="layout-container about-container">
      <Breadcrumb />
      <div class="about">About</div>
      <img class="hero-portrait" src="/img/about_portrait.jpg" alt="portrait">
    </div>
    <div class="about-content">
      <div class="text-container">
        <div class="title">Oliver Benjamin Rutz – Interactive Media Designer</div>
        <div class="text" v-html="parsedText" />
      </div>
      <div class="layout-container about-images">
        <img class="" src="/img/about_image.jpg" alt="portrait">
        <div class="about-image-group">
          <img class="about-image" src="/img/about_image2.jpg" alt="portrait">
          <img class="about-image" src="/img/about_image3.jpg" alt="portrait">
        </div>
      </div>
    </div>
  </div>
  <Footer ref="scrollToContact" :color="color" :transparentColor="transparentColor" />
</template>

<style scoped>
.about-container {
  padding-top: 4rem;
  padding-bottom: 1.875rem
}

.about {
  font-size: 6rem;
  padding-bottom: 0.625rem;
}

.hero-portrait {
  width: 100%;
  border: solid 1px black;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.text-container {
  font-size: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0 3.75rem;
}

.title {
  min-width: 50%;
  width: 50%;
  font-size: 4.7rem;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  border-bottom: black solid 1px;
  padding: 0 0 1.5rem 0;
  line-height: 88px;
}

.text {
  line-height: 22px;
}

:deep(.link):hover {
  font-style: italic;
}

.about-content {
  padding-bottom: 1.625rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
}

.about-images {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.about-image-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
}

.about-image-group img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 2;
}

.about-image-group img:nth-child(1) {
  grid-column: span 1;
}

.about-image-group img:nth-child(2) {
  grid-column: span 2;
}

@media (max-width: 640px) {
  .about-container {
    padding-top: 4.75rem;
    padding-bottom: 0;
  }

  .about {
    font-size: 3.75rem;
    padding-bottom: 0.5rem;
  }

  .hero-portrait {
    width: 100%;
    border: solid 1px black;
  }

  .about-content {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
    gap: 0;
  }

  .text-container {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    border-bottom: black solid 1px;
    padding: 0;
    gap: 0;
  }

  .title {
    min-width: 50%;
    width: 100%;
    font-size: 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    border-bottom: black solid 1px;
    padding: 0.75rem 1.25rem 1.25rem;
    line-height: normal;
  }

  .text {
    padding: 2.5rem 1.25rem;
  }

  .about-image-group {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
    width: 100%;
  }

  .about-image-group img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    aspect-ratio: auto;
  }

  .about-image-group img:nth-child(1) {
    grid-column: span 1;
  }

  .about-image-group img:nth-child(2) {
    grid-column: span 1;
  }

  .about-images {
    padding: 2.5rem 1.25rem;
  }

  .about-image {
    width: 100%;
  }
}

@media (min-width: 641px) and (max-width: 860px) {
  .about-container {
    padding-top: 4.75rem;
    padding-bottom: 0;
  }

  .about-content {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
    gap: 0;
  }

  .about-images {
    padding: 2.5rem 1.25rem;
  }

  .text-container {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    border-bottom: black solid 1px;
    padding: 0;
    gap: 0;
  }

  .title {
    min-width: 50%;
    width: 100%;
    font-size: 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    border-bottom: black solid 1px;
    padding: 0.75rem 1.25rem 1.25rem;
    line-height: normal;
  }

  .text {
    padding: 2.5rem 1.25rem;
  }
}

@media (min-width: 861px) and (max-width: 1024px) {
  .about-container {
    padding-top: 4.75rem;
    padding-bottom: 1.875rem;
  }

  .about-content {
    gap: 0;
  }

  .text-container {
    padding: 0;
    gap: 0;
  }

  .title {
    padding: 0 0 1.5rem 0;
    margin: 0 0 0 1.25rem;
  }

  .text {
    padding: 2.5rem 1.25rem;
  }
}

@media (min-width: 1536px) {}
</style>