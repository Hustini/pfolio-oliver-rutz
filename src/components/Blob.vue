<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  color: {
    type: [String],
    default: "#11FF00"
  }
})

const blobRef = ref(null)
const gradientPos = ref({ x: 75, y: 25 })

// Utility function to constrain a value between min and max
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

function updatePosition(e) {
  const blob = blobRef.value
  if (!blob) return

  const rect = blob.getBoundingClientRect()

  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const dx = e.clientX - centerX
  const dy = e.clientY - centerY

  const percentX = clamp(50 + (dx / rect.width) * 50, 20, 80)
  const percentY = clamp(50 + (dy / rect.height) * 50, 20, 80)

  gradientPos.value = { x: percentX, y: percentY }
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
      ref="blobRef"
      class="blob"
      :style="{
      background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, ${color} 0%, ${color} 10%, rgb(119, 23, 244) 70%)`
    }"
  ></div>
</template>

<style scoped>
.blob {
  width: 450px;
  height: 450px;
  border-radius: 50%;
  filter: blur(30px);
}


@media (max-width: 640px) {
  .blob {
    width: 280px;
    height: 280px;
    top: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
  }
}
</style>
