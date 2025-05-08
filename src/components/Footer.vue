<script setup>
</script>

<template>
  <footer>
    <div class="big-text">Let's Work Together!</div>
    <div class="contact-container">
      <div class="contact-item">
        <div>Mail</div>
        <div>Insta</div>
      </div>
      <div class="contact-item">
        <div>olivverutz26@gmail.com</div>
        <a href="https://www.instagram.com/oli_s_acc/">oli_s_acc</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  width: 100%;
  height: 310px;
  background-color: #11FF004D;
  color: white;
  font-size: 14px;
}

.big-text {
  font-size: 140px;
  color : #000000;
}

.contact-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.contact-item {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #000000;
}
</style>