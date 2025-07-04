<script setup>
import { provide } from 'vue'
import { onMounted } from 'vue'

const colors = [
  ['#11FF00', '#11FF004D'], // Green
  ['#17F4D7', '#17F4D74D'], // Blue
  ['#FF0090', '#FF00904D'], // Pink
  ['#FF7700', '#FF77004D'], // Orange
  ['#FF0000', '#FF00004D'], // Red
  ['#EEFF00', '#EEFF004D'], // Yellow
  ['#1500FF', '#1500FF4D'], // Blue
]

const randomNumber = Math.floor(Math.random() * 7);

const initParams = {
  color: colors[randomNumber][0],
  transparentColor: colors[randomNumber][1]
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