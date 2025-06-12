<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Filter from "@/components/Filter.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  components: {
    Breadcrumb
  }
}
</script>

<template>
  <div class="project-container">
    <NavBar isArrow="True"/>
    <div class="layout-container">
      <Breadcrumb />
      <div class="title">Projects Page</div>
      <div class="featured-title">Featured Projects </div>
      <div class="featured-projects">
        <div class="wrapper">
          <ProjectCard class="featured-title" imgPath="/img/placeholder.png" title="" caption=""/>
          <div class="featured-title">gkjhdgijb fasdkfsfsd</div>
        </div>
        <div class="wrapper">
          <ProjectCard class="featured-title" imgPath="/img/placeholder.png" title="" caption=""/>
          <div class="featured-title">gkjhdgijb fasdkfsfsd</div>
        </div>
      </div>
    </div>
    <Filter />
    <Footer />
  </div>
</template>

<style scoped>
.title {
  font-size: 6rem;
  padding-bottom: 2rem;
}

.featured-title {
  font-size: 2rem;
  padding-bottom: 1rem;
}

.featured-projects {
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
}

.project-container {
  padding-top: 2rem;
}

@media (max-width: 640px) {
  .project-container {
    padding-top: 4rem;
  }

  .title {
    font-size: 3.75rem;
    padding-bottom: 1rem;
  }

  .featured-title {
    font-size: 1.5rem;
  }

  .featured-projects {
    display: flex;
    flex-direction: column  ;
    gap: 0.5rem;
    padding-bottom: 1rem;
  }

  .project-container {
    padding-top: 4rem;
  }
}

</style>