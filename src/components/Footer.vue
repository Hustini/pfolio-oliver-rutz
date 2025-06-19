<script setup>
import Blob from '@/components/Blob.vue';
import { ref } from 'vue';

const footerRef = ref(null);
defineExpose({
  footerRef
});
</script>

<template>
  <footer ref="footerRef">
    <div class="layout-container footer-content">
      <div class="big-text">Let's Work Together!</div>
      <div class="blob">
        <Blob />
      </div>
      <div class="footer-bottom">
        <div class="contact-info">
          <div class="labels">
            <div>Mail</div>
            <div>Insta</div>
          </div>
          <div class="values">
            <div><a href="mailto:hallo@olirutz.ch">hallo@olirutz.ch</a></div>
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
  border-top: 1px solid black;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.big-text {
  font-size: 10vw;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
}

.contact-info {
  display: flex;
  gap: 5rem;
}

.labels, .values {
  display: flex;
  flex-direction: column;
}

.values {
  font-style: italic;
}

a {
  color: black;
  text-decoration: underline;
}

.footer-note {
  max-width: 320px;
  text-align: left;
}

.blob {
  position: absolute;
  left: 50%;
  bottom: -80%;
  transform: translateX(-50%);
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 640px) {
  .blob {
    top: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
  }

  .big-text {
    font-size: clamp(2rem, 5.5vw, 6vh);
    transform: rotate(-90deg);
    white-space: nowrap;
    margin: 0;
    width: 2.75rem;
  }

  footer {
    height: 420px;
    overflow: visible;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: left;
    height: 110%;
    gap: 2rem;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: 16px;
  }

  .contact-info {
    display: flex;
    gap: 2.5rem;
  }
}

@media (min-width: 1536px) {
  .blob {
    top: 150%;
    bottom: auto;
    transform: translate(-50%, -50%);
  }
}
</style>