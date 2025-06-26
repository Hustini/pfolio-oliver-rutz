<script setup>
import Button from "@/components/Button.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { ref, defineExpose } from 'vue'

const teaserRef = ref(null)
defineExpose({ teaserRef })
</script>

<template>
  <div class="container" ref="teaserRef">
    <div class="layout-container">
      <div class="title">Projects</div>
      <div class="projects">
        <router-link
            :to="{ name: 'ProjectDetail', params: { imgPath: '/img/placeholder.png', title: 'Test 1', tags: 'HTML,CSS,JS', time: '2025', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
            class="link"
        >
          <ProjectCard imgPath="/img/placeholder.png" title="Test 1" caption="dfalsdfhlaskj"/>
        </router-link>
        <router-link
            :to="{ name: 'ProjectDetail', params: { imgPath: '/img/placeholder.png', title: 'Test 2', tags: 'HTML,CSS,JS', time: '2025', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
            class="link"
        >
          <ProjectCard imgPath="/img/placeholder.png" title="Test 3" caption="dfalsdfhlaskj"/>
        </router-link>
        <router-link
            :to="{ name: 'ProjectDetail', params: { imgPath: '/img/placeholder.png', title: 'Test 3', tags: 'HTML,CSS,JS', time: '2025', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
            class="link"
        >
          <ProjectCard imgPath="/img/placeholder.png" title="Test 3" caption="dfalsdfhlaskj"/>
        </router-link>
      </div>
      <router-link to="/projects"><Button buttonText="SEE ALL PROJECTS" isArrow="True"/></router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: white;
  padding: 2.5rem 0;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  padding: 1.375rem 0;
}

.link {
  text-decoration: none;
  color: black;
}

@media (max-width: 640px) {
  .title {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }

  .container {
    background: white;
    padding: 1.25rem 0 3rem 0;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.625rem;
    padding: 0.625rem 0;
  }
}
</style>