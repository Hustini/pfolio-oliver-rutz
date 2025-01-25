<template>
  <header class="header">
    <h1>OLIVER BENJAMIN RUTZ</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header {
  background-color: black;
  color: white;
  text-align: left;
  font-size: 2.25rem;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}

h1 {
  margin: 0;
  padding-left: 1rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
}

@media screen and (max-width: 800px) {
  .header {
    font-size: 1.5em;
    width: 100%;
    padding-right: 0.5rem;
  }
}
</style>
