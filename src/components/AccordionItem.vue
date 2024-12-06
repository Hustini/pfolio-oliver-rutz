<template>
  <div class="item" @click="toggle">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content" :class="{ active: isActive }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.item {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
  border-bottom: 2px solid white;
  cursor: pointer;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.content.active {
  max-height: 5000px;
  opacity: 1;
}

.title h3 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
