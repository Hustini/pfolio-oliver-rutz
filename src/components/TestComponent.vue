<template>
  <div class="test-component">
    <h1>{{ title }}</h1>
    <p>Current Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    title: {
      type: String,
      default: "Test Counter Component",
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<style scoped>
.test-component {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
