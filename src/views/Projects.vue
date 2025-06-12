<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Filter from "@/components/Filter.vue";
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
      <h1>Projects Page</h1>
      <Filter />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.project-container {
  padding-top: 2rem;
}

@media (max-width: 640px) {
  .project-container {
    padding-top: 4rem;
  }
}
</style>