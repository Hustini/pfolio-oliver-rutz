<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import Button from "@/components/Button.vue";
import projects from '../assets/projects.json';
</script>

<script>
export default {
  data() {
    return {
      showReset: false,
      toggled: false,
      firstClick: true,
      selectedTags: [],
      tags: {
        web: true,
        installation: true,
        UX: true,
        print: true,
        video: true,
        CICD: true,
      }
    };
  },
  computed: { // computed only re-evaluate when the dependencies change
    allTagsActive() {
      if (this.firstClick) {
        // .every works on arrays and this.tags is an object
        return Object.values(this.tags).every(val => val === true);
      }
    },
  },
  methods: { // methods re-evaluate every call
    toggleTag(tagName) {
      // handles the first click
      if (this.firstClick) {
        this.selectedTags.push(tagName);
        this.showReset = true;
        for (let tag in this.tags) {
          this.tags[tag] = (tag === tagName);
        }
        this.firstClick = false;
        return;
      }
      // toggle for the different tags
      if (this.selectedTags.includes(tagName)) {
        this.tags[tagName] = false;
        this.selectedTags = this.selectedTags.filter((tag) => tag !== tagName);
      } else {
        this.tags[tagName] = true;
        this.selectedTags.push(tagName);
        this.showReset = true;
      }
      // handles if no tag is selected
      if (this.selectedTags.length === 0 && this.firstClick === false) {
        for (let tag in this.tags) {
          this.tags[tag] = true;
        }
        this.firstClick = true;
        this.showReset = false;
      }
    },
    reset() {
      this.selectedTags = [];
      for (let tag in this.tags) {
        this.tags[tag] = true;
      }
      this.firstClick = true;
      this.showReset = false;
    }
  }
}
</script>

<template>
  <div class="filter layout-container">
    <div class="title">Filter</div>
    <div class="filter-buttons">
      <span><Button :class="['button', { toggled : !allTagsActive && tags.web }]" buttonText="WEB" @click="toggleTag('web');"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.installation }]" buttonText="INSTALLATION" @click="toggleTag('installation')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.UX }]" buttonText="UX/UI" @click="toggleTag('UX')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.print }]" buttonText="PRINT" @click="toggleTag('print')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.video }]" buttonText="VIDEO" @click="toggleTag('video')"/></span>
      <span><Button :class="['button', { toggled : !allTagsActive && tags.CICD }]" buttonText="CI/CD" @click="toggleTag('CICD')"/></span>
      <span class="reset" v-if="showReset === true" @click="reset()">
        <img class="reset-symbol" src="../assets/x_symbol.svg" alt="Reset Icon" />
        <Button class="reset-button button" buttonText="Reset Filter" />
      </span>
    </div>
    <div class="projects">
      <router-link
          v-if="tags.print === true"
          :to="{
          name: 'ProjectDetail',
          query: { project: 'ArcadeBot' }
        }"
          class="link"
      >
        <ProjectCard :imgPath="projects.ArcadeBot.imgPath" :tag="tags.print" :title="projects.ArcadeBot.title" :caption="projects.ArcadeBot.caption"/>
      </router-link>
      <router-link
          v-if="tags.web === true"
          :to="{ name: 'ProjectDetail',
          query: { imgPath: '/img/placeholder.png', title: 'WEB', tags: 'HTML,CSS,JS', time: '2025', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
          class="link"
      >
        <ProjectCard imgPath="/img/placeholder.png" title="WEB" caption="dfalsdfhlaskj" :tag="tags.web"/>
      </router-link>
      <router-link
          v-if="tags.installation === true"
          :to="{ name: 'ProjectDetail',
          query: { imgPath: '/img/placeholder.png', title: 'Installation', tags: 'HTML,CSS,JS', time: '1955', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
          class="link"
      >
        <ProjectCard imgPath="/img/placeholder.png" title="Installation" caption="dfalsdfhlaskj" :tag="tags.installation"/>
      </router-link>
      <router-link
          v-if="tags.UX === true"
          :to="{ name: 'ProjectDetail',
          query: { imgPath: '/img/placeholder.png', title: 'UX/UI', tags: 'HTML,CSS,JS', time: '2006', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
          class="link"
      >
        <ProjectCard imgPath="/img/placeholder.png" title="UX/UI" caption="dfalsdfhlaskj" :tag="tags.UX"/>
      </router-link>
      <router-link
          v-if="tags.print === true"
          :to="{ name: 'ProjectDetail',
          query: { imgPath: '/img/placeholder.png', title: 'Print', tags: 'HTML,CSS,JS', time: '2010', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
          class="link"
      >
        <ProjectCard imgPath="/img/placeholder.png" title="Print" caption="dfalsdfhlaskj" :tag="tags.print"/>
      </router-link>
      <router-link
          v-if="tags.video === true"
          :to="{ name: 'ProjectDetail',
          query: { imgPath: '/img/placeholder.png', title: 'Video', tags: 'HTML,CSS,JS', time: '2005', text: 'In meinem Projekt «Zürich  Reimagined» stelle ich Graffiti als künstlerische Ausdrucksform im Raum  Zürich dar. Oft als Vandalismus abgetan, sehe ich Graffiti als ein  Sprachrohr für kreative Freiheit und städtische Identität. Mein Ziel war es, eine Kultur des Miteinanders und der Kooperation zu fördern, indem  ich Möglichkeit legale Graffiti-Flächen zu unterstützen biete und einen  Dialog zwischen Künstlern, der Community und Behörden anrege. Dafür habe ich eine digitale Awareness-Kampagne in Form einer Website konzipiert,  die über die Geschichte, Bedeutung und rechtlichen Rahmenbedingungen von Graffiti informiert. Das Design kombiniert Swiss-Layout-Prinzipien mit  künstlerischen Elementen der Streetart. ', link: 'https://www.figma.com/proto/cwxJ3KXRWbxD2EYGdkAZ8Y/Z%C3%BCrich-Reimagined-Schule?page-id=582%3A537&node-id=582-803&viewport=848%2C270%2C0.08&t=Gw1DZNUiNjJdjqmJ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=582%3A803&show-proto-sidebar=1'}}"
          class="link"
      >
        <ProjectCard imgPath="/img/placeholder.png" title="Video" caption="dfalsdfhlaskj" :tag="tags.video"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.filter {
  border-top: black solid 1px;
  padding: 3.75rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 0.625rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  gap: 1.25rem;
}

.toggled {
  background: #7717F44D;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 2rem
}

.reset {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0 0 1.25rem;
}

.reset-button {
  border: none;
  padding: 10px 0;
}

.reset-symbol {
  width: 10px;
  height: 10px;
}

.link {
  text-decoration: none;
  color: black;
}

@media (max-width: 640px) {
  .button {
    width: auto
  }

  .filter {
    border-top: black solid 1px;
    padding: 2.5rem 1.25rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom: 0.625rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.875rem;
  }

  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 0.625rem
  }

  .reset-button {
    border: none;
  }
}
</style>