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
  },
  tag: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="card" v-if="tag === true">
    <img :src="imgPath" alt="placeholder">
    <div class="text">
      <div class="title">{{title}}</div>
      <div class="caption">{{caption}}</div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  border: solid 1px black;
}

.card {
  width: 100%;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.card:hover {
  transform: scale(1.025);
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

@media (max-width: 640px) {
  .title {
    font-weight: 400;
    font-size: 16px;
  }
}
</style>