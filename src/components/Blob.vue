<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props for dynamic width and height
const props = defineProps({
  width: {
    type: [Number, String],
    default: 400
  },
  height: {
    type: [Number, String],
    default: 400
  }
})

const gradientPos = ref({ x: 75, y: 25 })

// Utility function to constrain a value between min and max
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

function updatePosition(e) {
  const blob = document.querySelector('.blob')
  if (!blob) return

  // Get the size and position of the blob element on the screen
  const rect = blob.getBoundingClientRect()

  // Calculate the center of the blob element
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  // Calculate the distance from the mouse to the center of the blob
  const dx = e.clientX - centerX
  const dy = e.clientY - centerY

  // Convert distance into percentage offsets for the gradient position
  // 50% means center; we offset proportionally and clamp to keep the green visible
  const percentX = clamp(50 + (dx / rect.width) * 50, 20, 80)
  const percentY = clamp(50 + (dy / rect.height) * 50, 20, 80)

  gradientPos.value = {x: percentX, y: percentY}
}

// Add the mousemove listener when component is mounted
onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
})

// Remove the listener when component is unmounted to avoid memory leaks
onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
})
</script>

<template>
  <div
      class="blob"
      :style="{
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
      background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, rgba(0, 255, 64, 1) 0%, rgba(0, 255, 64, 1) 10%, rgb(119, 23, 244) 70%)`
    }"
  ></div>
</template>

<style scoped>
.blob {
  border-radius: 50%;
  filter: blur(30px);
  box-shadow: 0 0 40px rgba(0, 255, 64, 0.4), 0 0 60px rgba(119, 23, 244, 0.4);
}
</style>
