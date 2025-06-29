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
    <div class="about-content">
      <div class="text">
        {{ data.text }}
      </div>
      <div class="layout-container img-container">
        <div class="rectangle"></div>
        <div class="wrapper">
          <div class="rectangle"></div>
          <div class="rectangle"></div>
        </div>
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

.text {
  font-size: 16px;
  width: 50%;
  padding-left: 3.75rem;
}

.about-content {
  display: flex;
  padding-bottom: 1.625rem;
  gap: 1.875rem;
}

.img-container {
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 2rem;
  width: 100%;
  padding: 0 3.75rem 0 0;
}

.rectangle {
  aspect-ratio: 4 / 3;
  width: 100%;
  background: #333333;
  display: block;
}

.wrapper {
  display: flex;
  flex-direction: row;
  gap: 2rem;
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
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 1rem;
  }

  .text {
    width: 100%;
    max-width: 100%;
    flex: unset;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    padding: 2.5rem 1.25rem;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 1.25rem;
    width: 100%;
    padding: 2.5rem 1.25rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

@media (min-width: 1536px) {
  .text {
    font-size: 1.5rem;
    width: 50%;
    flex: 1;
    max-width: 33.3333%;
    padding-left: 3.75rem;
  }
}
</style>