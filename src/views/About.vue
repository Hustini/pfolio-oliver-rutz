<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { ref } from 'vue'
import { inject } from 'vue'
import data from '../assets/about.json';

const initParams = inject('initParams')
const color = initParams.color
const transparentColor = initParams.transparentColor

const scrollToContact = ref<HTMLElement | null>(null)

function scrollTo() {
  scrollToContact.value?.footerRef?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div>
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)"/>
    <div class="layout-container about-container">
      <Breadcrumb />
      <div class="about">About</div>
      <img class="hero-portrait" src="/img/about_portrait.jpg" alt="portrait">
    </div>
    <div class="layout-container about-content">
      <div class="text-container">
        <p class="text" v-for="(line, idx) in data.text.split('\n')" :key="idx">
          {{ line }}
        </p>
      </div>
    </div>
  </div>
  <Footer ref="scrollToContact" :color="color" :transparentColor="transparentColor" />
</template>

<style scoped>
.about-container {
  padding-top: 2rem;
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
}

.about-content {
  padding-bottom: 1.625rem;
}

@media (max-width: 640px) {
  .about-container {
    padding-top: 4.75rem;
    padding-bottom: 2.5rem;
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
  }

  .text-container {
    width: 100%;
    max-width: 100%;
    border-top: black solid 1px;
    border-bottom: black solid 1px;
    padding: 2.5rem 1.25rem;
  }
}

@media (min-width: 1536px) {
  .text {
    font-size: 1.5rem;
    width: 100%;
    flex: 1;
    max-width: 33.3333%;
  }
}
</style>