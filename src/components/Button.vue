<script setup>
const props = defineProps({
  buttonText: {
    type: [String],
    default: "default"
  },
  isArrow: {
    type: [String],
    default: "False"
  }
})
</script>

<template>
  <button>
    {{ buttonText }}
  </button>
</template>

<style scoped>
button {
  border: solid 1px black;
  background-color: white;
}
</style>