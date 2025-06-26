<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
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
  <div>
    <NavBar isArrow="True" @scroll-contact="() => scrollTo(scrollToContact)"/>
    <div class="layout-container about-container">
      <Breadcrumb />
      <div class="about">About</div>
      <img class="hero-portrait" src="/img/about_portrait.jpg" alt="portrait">
    </div>
    <div class="about-content">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna  tortor, euismod vitae dolor eget, porta consectetur augue. Morbi lorem  quam, semper vel aliquet volutpat, pretium eget nisl. Morbi hendrerit  turpis sapien, vel sollicitudin ipsum bibendum quis. Nunc id elementum  nulla, eu tincidunt ex. Nulla condimentum tincidunt rhoncus. Donec  sollicitudin varius libero vel vulputate. Pellentesque pharetra  scelerisque nisi, nec laoreet magna blandit sit amet. Mauris mattis nisi purus, commodo ornare magna semper in. Ut interdum feugiat nisl et  sagittis. Nullam volutpat urna id arcu dapibus, condimentum imperdiet  dolor fringilla. Aliquam sed viverra tellus. Vivamus mattis libero a  nisi viverra, at eleifend ligula fringilla. Nunc in dignissim sapien, et vestibulum ante. Sed eleifend, felis nec faucibus commodo, mi purus  efficitur lorem, vitae mollis leo nibh eget enim.
        Sed volutpat sapien sem, et vestibulum arcu blandit ut. Mauris tincidunt pharetra arcu non facilisis. Cras sed dapibus purus. Morbi convallis at felis non laoreet. Cras feugiat lobortis sodales. Mauris accumsan est  ut euismod faucibus. Nunc at dapibus eros. Pellentesque eu dapibus  neque, nec porta tellus. Donec ac posuere mauris. Morbi in condimentum  odio.
        Quisque venenatis quam nec pretium convallis. Sed rutrum, neque in  facilisis sodales, nibh ligula tincidunt arcu, at dapibus risus nisl  eget elit. Aenean auctor dui diam, sed malesuada enim congue eget. Orci  varius natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus. Pellentesque quis metus porttitor, vestibulum neque non,  rutrum dui. Maecenas non mauris eget mauris venenatis vehicula.  Pellentesque pharetra augue turpis, semper molestie lectus sagittis  vitae. Proin non lorem bibendum, faucibus libero in, ullamcorper elit.  Sed vel nunc nulla. Etiam lectus ex, posuere et convallis sit amet,  rhoncus in urna. Morbi justo nisl, sagittis quis tempus vel, placerat  nec nulla.
        Phasellus cursus orci nec tempus egestas. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Aenean malesuada nisl id tellus aliquam,  vel lobortis mi aliquet. Fusce dictum leo magna, sed eleifend erat  ultricies id. Cras ut imperdiet ipsum. Nullam at facilisis nunc. In hac  habitasse platea dictumst.
        Donec est nunc, ultricies sit amet elit at, tristique tempor tellus. Sed aliquam congue feugiat. Vivamus ut euismod orci, vel luctus sem.  Integer a lacus tortor. Morbi vitae nisl malesuada, dictum nibh eget,  faucibus lorem. Integer porttitor, nibh nec lobortis viverra, felis  nulla eleifend velit, ac imperdiet magna orci vel lacus. Quisque pretium metus sit amet purus rhoncus, vitae volutpat lorem accumsan. Maecenas  faucibus posuere blandit. Duis id blandit odio, at interdum felis.
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