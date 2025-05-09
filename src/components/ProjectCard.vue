<script setup>
const props = defineProps({
  imgPath: {
    type: [Number, String],
    default: "/img/placeholder.png"
  },
  title: {
    type: [Number, String],
    default: "default title"
  },
  caption: {
    type: [Number, String],
    default: "default caption"
  }
})
</script>

<template>
  <div>
    <img :src="imgPath" alt="placeholder">
    <div class="text">
      <div class="title">{{title}}</div>
      <div class="caption">{{caption}}</div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 425px;
  border: solid 1px black;
}

.text {
  margin-top: 0.5rem;
}

.title {
  font-weight: 400;
  font-size: 20px;
}

.caption {
  font-weight: 400;
  font-size: 12px;
}
</style>