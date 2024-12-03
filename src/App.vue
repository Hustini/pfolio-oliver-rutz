<template>
  <Header></Header>
  <div class="background-image"></div>
  <TextDisplay></TextDisplay>
  <AccordionPanel></AccordionPanel>
</template>

<script>
import Header from "@/components/Header.vue";
import TextDisplay from "@/components/Text.vue";
import AccordionPanel from "@/components/Accordion.vue";

export default {
  name: "App",
    components: {
      AccordionPanel,
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
  background-image: url("@/assets/Portrait_16x9.png");
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center 125%; /* Centers the image */
  background-repeat: no-repeat; /* Avoids repeating the image */
  width: 100%;
  height: 100vh; /* Makes the container full viewport height */
}

body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Custom Scrollbar Styles */
body {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #888 #f0f0f0; /* Track and thumb colors for Firefox */
}

::-webkit-scrollbar {
  width: 8px; /* Make the scrollbar thinner */
  height: 8px; /* For horizontal scrollbars */
}

::-webkit-scrollbar-track {
  background: #f0f0f0; /* Track color */
  border-radius: 4px; /* Round the corners */
}

::-webkit-scrollbar-thumb {
  background-color: #888; /* Thumb color */
  border-radius: 4px; /* Round the corners */
  border: 2px solid #f0f0f0; /* Adds space around thumb */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Darker color on hover */
}
</style>
