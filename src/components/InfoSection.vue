<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="info-container">
    <div class="layout-container text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus diam aliquet risus egestas, aliquam molestie tortor fermentum. Nullam ornare enim vel tempor commodo. Mauris id lobortis augue. Nullam ornare enim vel tempor commodo. Mauris id lobortis augue.
    </div>
    <div class="layout-container">
      <router-link to="/about"><Button buttonText="LEARN MORE ABOUT ME" isArrow="True"/></router-link>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  background-color: #11FF004D;
  padding: 2rem 0;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
}

.text {
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 2rem;
}

@media (max-width: 640px) {
  .text {
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
</style>