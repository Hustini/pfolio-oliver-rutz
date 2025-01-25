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
  width: 100%;
  padding: 0;
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
  color: white;
  background: black;
  margin: 0;
  padding: 0;
  font-size: 72px;
}

@media screen and (max-width: 800px) {
  .title h3 {
    font-size: 48px;
  }
}
</style>
