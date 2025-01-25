<template>
  <div class="text">
    <h1>INTERACTIVE</h1>
    <h1>MEDIA</h1>
    <h1>DESIGN</h1>
  </div>
</template>

<script>
export default {
  name: 'TextDisplay'
}
</script>

<style>
.text {
  background-color: black;
  color: white;
  text-align: left;
  font-size: 2.25rem;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
}

h1 {
  margin: 0;
  padding-left: 1rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  display: inline-block;
}

@media screen and (max-width: 800px) {
  .text {
    font-size: 1.5em;
    width: 100%;
    padding-right: 1rem;
  }

  h1 {
    display: block;
  }
}
</style>
