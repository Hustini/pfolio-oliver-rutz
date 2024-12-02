<template>
  <Header></Header>
  <div class="background-image"></div>
  <TextDisplay></TextDisplay>
</template>

<script>
import Header from "@/components/Header.vue";
import TextDisplay from "@/components/Text.vue";

export default {
  name: "App",
    components: {
      TextDisplay,
      Header
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.background-image {
  background-image: url("@/assets/background_placeholder.jpg");
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Avoids repeating the image */
  width: 100%;
  height: 100vh; /* Makes the container full viewport height */
}
</style>
