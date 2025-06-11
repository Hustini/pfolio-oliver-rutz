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
        <svg :class="['arrow-icon', { rotated: isMenuOpen }]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z" data-name="2-Arrow Down"/>
        </svg>
      </button>
      <div :class="['navbar-menu', { active: isMenuOpen }]">
        <ul class="menu-items">
          <li>
            <router-link to="/" class="menu-item" active-class="active" exact>Projects →</router-link>
          </li>
          <li>
            <router-link to="/projects" class="menu-item" active-class="active">About →</router-link>
          </li>
          <li>
            <router-link to="/about" class="menu-item" active-class="active">contact ↓</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* General Navbar Styles */
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  background: transparent;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #000000;
  z-index: 1000;
}

.navbar-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  z-index: 1100;
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
  transition: transform 0.3s ease-in-out;
}

.arrow-icon.rotated {
  transform: rotate(-180deg);
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
  top: 100%;
  right: 0;
  width: 14%;
  background: transparent;
  transition: all 0.3s ease-in-out;
  max-height: 0;
  overflow: hidden;
  z-index: 10;
}

.navbar-menu.active {
  display: block;
  max-height: 500px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  background: transparent;
  border: 1px solid #000000;
  border-top: none;
}

.menu-items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-items li {
  padding: 0.25rem 2.5rem 0.25rem 0;
}

.menu-item {
  text-decoration: none;
  color: black;
  font-size: 20px;
  display: block;
  text-align: right;
}
</style>
