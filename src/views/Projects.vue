<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
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
  </div>
  <Footer />
</template>

<style scoped>
</style>