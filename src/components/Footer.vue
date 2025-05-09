<script setup lang="ts">
import Blob from '@/components/Blob.vue';
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="big-text">Let's Work Together!</div>
      <div class="blob">
        <Blob width="475px" height="475px"/>
      </div>
      <div class="footer-bottom">
        <div class="contact-info">
          <div class="labels">
            <div>Mail</div>
            <div>Insta</div>
          </div>
          <div class="values">
            <div><a href="mailto:olivverutz26@gmail.com">olivverutz26@gmail.com</a></div>
            <div><a href="https://www.instagram.com/oli_s_acc/">@oli_s_acc</a></div>
          </div>
        </div>
        <div class="footer-note">
          Just hit me up for a chat or we<br />
          drink a coffee somewhere in zurich.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  overflow: hidden;
  background-color: #11FF004D;
  color: black;
  width: 100%;
  padding: 1rem 0 3rem 0;
  border-top: 2px solid black;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.big-text {
  font-size: 7.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
}

.contact-info {
  display: flex;
  gap: 5rem;
}

.labels, .values {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.values {
  font-style: italic;
}

a {
  color: black;
  text-decoration: underline;
}

.footer-note {
  max-width: 300px;
  text-align: left;
}

.blob {
  position: absolute;
  left: 50%;
  bottom: -75%;
  transform: translateX(-50%);
  z-index: 0;
  pointer-events: none;
}
</style>