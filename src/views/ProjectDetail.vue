<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const title = route.params.title;
const time = route.params.time;
</script>

<template>
  <div class="test">
    {{ title }}
  </div>
  <div class="test">
    {{ time }}
  </div>
</template>

<style scoped>
.test {
  background: red;
}
</style>