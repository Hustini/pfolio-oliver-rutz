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
            :to="{
          name: 'ProjectDetail',
          query: {
            imgPath: 'public/Zuerich Reimagined/Keyvisual.png',
            title: 'Zürich Reimagined — IMD-Award-Winner',
            tags: 'WEB',
            time: '2024',
            text: `In meinem Projekt «Zürich Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert, die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit künstlerischen Elementen der Streetart.`,
            link: 'https://studio.youtube.com/video/h3i8aFNgeLg/edit'
          }
        }"
            class="link"
        >
          <ProjectCard imgPath="public/Zuerich Reimagined/Keyvisual.png" title="Zürich Reimagined — IMD-Award-Winner" caption="«Zürich Reimagined» macht Graffiti als kreative Stimme der Stadt erlebbar – mit einer digitalen Kampagne für Dialog, Aufklärung und legale Freiräume."/>
        </router-link>
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'VA' }
        }"
            class="link"
        >
          <ProjectCard imgPath="public/VA/IMG_9794.png" title="VA — Der Einfluss von Social Media auf religiöse Praktiken und Glaubensüberzeugungen." caption="Vertiefungsarbeit zum Thema Religion & Social Media"/>
        </router-link>
        <router-link
            :to="{
          name: 'ProjectDetail',
          query: { project: 'ArcadeBot' }
        }"
            class="link"
        >
          <ProjectCard imgPath="ArcadeBot/front Keyvisual.png" title="Bits-N-Bolts — ArcadeBot" caption="Selbstgebaute Installation mit dem Thema: «Können Roboter Emotionen zeigen?»"/>
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

@media (min-width: 641px) and (max-width: 1024px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
</style>