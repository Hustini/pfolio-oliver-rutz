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
  <NavBar isArrow="True"/>
  <div class="layout-container">
    <Breadcrumb />
    <h1>Projects Page</h1>
    <Filter />
  </div>
  <Footer />
</template>

<style scoped>
</style>