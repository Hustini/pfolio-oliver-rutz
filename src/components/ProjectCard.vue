<script setup>
const props = defineProps({
  imgPath: {
    type: [Number, String],
    default: "/img/placeholder.png"
  },
  awardImg: {
    type: [Number, String],
    default: ""
  },
  placeholder: {
    type: [Number, String],
    default: "default placeholder"
  },
  title: {
    type: [Number, String],
    default: "default title"
  },
  caption: {
    type: [Number, String],
    default: "default caption"
  },
  disableHover: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card">
    <div class="image-wrapper" :class="{ 'no-hover': disableHover }">
      <img :src="imgPath" :alt="placeholder" />
      <img v-if="awardImg !== ''" class="top-image" :src="awardImg" alt="award" />
    </div>
    <div class="text">
      <div class="title">{{ title }}</div>
      <div class="caption">{{ caption }}</div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  border: solid 1px black;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.image-wrapper {
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.025);
}
.image-wrapper.no-hover:hover {
  transform: scale(1) !important;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.top-image {
  position: absolute;
  width: 22%;
  top: 0;
  right: 8%;
}

.card {
  width: 100%;
}

.text {
  padding: 0.375rem 0 0 0;
}

.title {
  font-weight: 400;
  font-size: 20px;
  padding: 0 0 0.25rem 0;
}

.caption {
  font-weight: 400;
  font-size: 12px;
}

@media (max-width: 640px) {
  .title {
    font-weight: 400;
    font-size: 16px;
    padding: 0;
  }

  .text {
    padding: 0;
  }
}
</style>