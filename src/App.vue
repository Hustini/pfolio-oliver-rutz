<script setup>
import { provide } from 'vue'
import { onMounted } from 'vue'

const initParams = {
  color: '#17F4D7',
  transparentColor: '#17F4D74D'
}

onMounted(() => {
  console.log('App freshly loaded, setting init params...')
})

// Provide the params globally
provide('initParams', initParams)
</script>

<template>
  <div id="app">
    <!-- <Navbar /> -->
    <router-view />
  </div>
</template>