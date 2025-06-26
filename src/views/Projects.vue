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
            :to="{ name: 'ProjectDetail', params: { imgPath: '/img/placeholder.png', title: 'Feature 1', tags: 'HTML,CSS,JS', time: '2025', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
            class="link"
        >
          <ProjectCard class="featured-project" imgPath="/img/placeholder.png" title="" caption=""/>
          <div class="featured-title">Feature 1</div>
        </router-link>
        <router-link
            :to="{ name: 'ProjectDetail', params: { imgPath: '/img/placeholder.png', title: 'VA — Der Einfluss von Social Media auf religiöse Praktiken und Glaubensüberzeugungen.',
            tags: 'PRINT', time: '2024 — 2025', text: 'Die Vorwissenschaftliche Arbeit mit dem Thema «Der Einfluss von Social Media auf religiöse Praktiken und Glaubensüberzeugungen» hat mich dazu angeregt, mich intensiver mit meinem Umfeld und verschiedenen Religionen auseinanderzusetzen. Viele meiner Freunde sind gläubig und gehören unterschiedlichen Glaubensgemeinschaften an. Während der Beginn meiner Arbeit mit einer besonders intensiven Phase des Nahost-Konflikts zusammenfiel, waren die sozialen Netzwerke geprägt von hitzigen Diskussionen und teils hasserfüllten Kommentaren. Das hat in mir die Frage aufgeworfen, ob Social Media Menschen womöglich radikaler macht. In diesem Zusammenhang habe ich verschiedene Experimente zum Thema Hassrede und Hetze durchgeführt, um diesem Phänomen näher auf den Grund zu gehen. Meine VA wurde in die Top drei der VA im Lehrgang IMD gewählt, und wurde an der Schule für Gestaltung in St.Gallen ausgestellt und bekommt je nachdem noch eine Ehrung am 03.07.2025.',}}"
            class="link"
        >
          <ProjectCard class="featured-project" imgPath="/img/placeholder.png" title="" caption=""/>
          <div class="featured-title">VA — Der Einfluss von Social Media auf religiöse Praktiken und Glaubensüberzeugungen.</div>
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
}

.featured-projects {
  display: flex;
  gap: 1rem;
  padding-bottom: 2.5rem;
}

.project-container {
  padding-top: 2rem;
}

.link {
  text-decoration: none;
  color: black;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.link:hover {
  transform: scale(1.025);
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
    gap: 1rem;
    padding-bottom: 2.5rem;
  }

  .project-container {
    padding-top: 4rem;
  }
}

</style>