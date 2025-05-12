<script setup>
import {ref} from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("Menu toggled:", isMenuOpen.value);
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container layout-container">
      <router-link to="/" class="navbar-logo" active-class="active" exact>
        <span class="brand-name">Home</span>
      </router-link>
      <button class="menu-toggle" :aria-expanded="isMenuOpen.toString()" @click="toggleMenu">
        <span class="menu-item">Menu</span>
        <svg  :class="['arrow-icon', { rotated: isMenuOpen }]" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"><title>right-arrow</title>
            <desc>Created with Sketch.</desc>
            <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)"
                 fill="#252528" fill-rule="nonzero">
                <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path
                      d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                      id="right-arrow"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <div :class="['navbar-menu', { active: isMenuOpen }]">
        <ul class="menu-items">
          <li>
            <router-link to="/" class="menu-item" active-class="active" exact>Home</router-link>
          </li>
          <li>
            <router-link to="/projects" class="menu-item" active-class="active">Projects</router-link>
          </li>
          <li>
            <router-link to="/about" class="menu-item" active-class="active">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* General Navbar Styles */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
}

.navbar-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-name {
  font-size: 24px;
  font-weight: 400;
  color: #333;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transform: rotate(270deg);
  transition: transform 0.3s ease-in-out;
}

.arrow-icon.rotated {
  transform: rotate(90deg);
}

/* Menu Toggle Button */
.menu-toggle {
  display: inline-flex;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* Navbar Menu */
.navbar-menu {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #f8f8f8;
  transition: all 0.3s ease-in-out;
  max-height: 0;
  overflow: hidden;
  z-index: 10;
}

.navbar-menu.active {
  display: block;
  max-height: 500px;
}

.menu-items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  text-decoration: none;
  color: black;
  font-size: 20px;
  display: block;
}
</style>
