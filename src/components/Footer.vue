<script setup>
import Blob from '@/components/Blob.vue';
import { ref } from 'vue';

const props = defineProps({
  color: {
    type: [String],
    default: "#11FF00"
  },
  transparentColor: {
    type: [String],
    default: "#11FF004D"
  }
})

const footerRef = ref(null);
defineExpose({
  footerRef
});
</script>

<template>
  <footer ref="footerRef" :style="{'background-color': transparentColor}">
    <div class="layout-container footer-content">
      <div class="svg-container">
        <img src="../assets/text.svg" class="svg-text" alt="Let's Work Together!" />
        <img src="../assets/text_rotated.svg" class="svg-text-rotated" alt="Let's Work Together!" />
      </div>
      <div class="blob">
        <Blob :color="color" :transparentColor="transparentColor" />
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
  color: black;
  width: 100%;
  padding: 2.5rem 0;
  border-top: 1px solid black;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.875rem;
}

.svg-container {
  width: 100%;
}

.svg-text {
  width: 100%;
  height: auto;
  pointer-events: none;
}

.svg-text-rotated {
  display: none;
  padding-top: 2rem;
  width: auto;
  height: 100%;
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

a {
  color: black;
  text-decoration: underline;
}

a:hover {
  font-style: italic;
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

  .svg-container {
    width: 3rem;
    height: 100%;
  }

  .svg-text {
    display: none;
    padding-top: 2rem;
    width: 100%;
    height: auto;
  }

  .svg-text-rotated {
    display: block;
    padding-top: 0;
    width: 100%;
    height: 100%;
  }

  footer {
    padding: 1.25rem 0;
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
    min-height: 375px;
    font-size: 16px;
  }

  .contact-info {
    display: flex;
    gap: 2.5rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .blob {
    top: 120%;
    bottom: auto;
    transform: translate(-50%, -50%);
  }
}

@media (min-width: 1536px) {
  .blob {
    top: 100%;
    bottom: auto;
    transform: translate(-50%, -50%);
  }
}
</style>