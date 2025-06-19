<script setup>
const props = defineProps({
  buttonText: {
    type: [String],
    default: "default"
  },
  isArrow: {
    type: [String],
    default: "False"
  }
})
</script>

<template>
  <button class="custom-button">
    <span>{{ buttonText }}</span>
    <svg
        v-if="isArrow === 'True'"
        class="arrow-icon"
        viewBox="0 -6.5 36 36"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_iconCarrier">
        <g transform="translate(-212.000000, -159.000000)" fill="#252528">
          <g transform="translate(50.000000, 120.000000)">
            <path
                d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z"
            />
          </g>
        </g>
      </g>
    </svg>
  </button>
</template>

<style scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: solid 1px black;
  border-radius: 30px;
  background: none;
  color: black;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.custom-button:hover {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: #7717F4 solid 1px;
  border-radius: 30px;
  background: #7717F4;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.arrow-icon path {
  fill: black; /* default */
  transition: fill 0.3s ease;
}

.custom-button:hover .arrow-icon path {
  fill: white;
}

@media (max-width: 640px) {
  .custom-button {
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}
</style>