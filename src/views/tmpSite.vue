<script setup>
</script>

<template>
  <!-- Invisible Debug Button -->
  <router-link to="/home" class="debug-button" active-class="active" exact>Home</router-link>

  <div class="coming-soon">
    <h1>Coming Soon!</h1>
    <p>Our website is currently under construction and is expected to be completed by next month. Thank you for your patience.</p>
    <a href="mailto:hallo@olirutz.ch" class="contact-button">Contact Us</a>
  </div>
</template>

<style scoped>
.coming-soon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
}

.debug-button {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  opacity: 0;
  z-index: 1000;
}

.contact-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: transparent;
  color: black;
  border: black solid 1px;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #7717F4;
  color: white;
  border: #7717F4 solid 1px;
}
</style>