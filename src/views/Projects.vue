<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Filter from "@/components/Filter.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { ref } from 'vue'

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
          <ProjectCard imgPath="/img/placeholder.png" title="" caption=""/>
          <div class="featured-title">Feature 1</div>
        </router-link>
        <router-link
            :to="{ name: 'ProjectDetail', params: { imgPath: '/img/placeholder.png', title: 'Feature 2', tags: 'HTML,CSS,JS', time: '2025', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
            class="link"
        >
          <ProjectCard class="featured-title" imgPath="/img/placeholder.png" title="" caption=""/>
          <div class="featured-title">Feature 2</div>
        </router-link>
      </div>
    </div>
    <Filter />
    <Footer ref="scrollToContact" />
  </div>
</template>

<style scoped>
.title {
  font-size: 6.25rem;
  padding-bottom: 1.375rem;
}

.featured-title {
  font-size: 2.5rem;
  padding-bottom: 0.625rem;
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
}

@media (max-width: 640px) {
  .project-container {
    padding-top: 4rem;
  }

  .title {
    font-size: 3.75rem;
    padding-bottom: 0.5rem;
  }

  .featured-title {
    font-size: 1.5rem;
  }

  .featured-projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .project-container {
    padding-top: 4rem;
  }
}

</style>