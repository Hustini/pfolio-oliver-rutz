<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo-container">
        <img src="https://flowbite.com/docs/images/logo.svg" class="logo" alt="Logo" />
        <span class="brand-name">Flowbite</span>
      </router-link>

      <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen.toString()" aria-controls="navbar-default">
        <span class="sr-only">Open main menu</span>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <div :class="['menu', { open: isMenuOpen }]">
        <ul class="menu-list">
          <li><router-link to="/" class="menu-link" active-class="active" exact>Home</router-link></li>
          <li><router-link to="/about" class="menu-link" active-class="active">About</router-link></li>
          <li><router-link to="/projects" class="menu-link" active-class="active">Projects</router-link></li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Basic navbar layout */
.navbar {
  border-bottom: 1px solid #ccc;
  background-color: white;
  width: 100%;
}

.navbar-container {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 16px;
}

/* Logo */
.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 32px;
}

.brand-name {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: black;
  white-space: nowrap;
}

/* Toggle Button - always visible */
.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.menu-icon {
  width: 24px;
  height: 24px;
  stroke: #333;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Menu */
.menu {
  width: 100%;
  display: none;
  flex-basis: 100%;
}

.menu.open {
  display: block;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin-top: 16px;
}

.menu-link {
  display: block;
  text-decoration: none;
  padding: 8px 12px;
  color: #333;
  transition: background-color 0.2s ease;
}

.menu-link:hover {
  background-color: #eee;
}

.menu-link.active {
  font-weight: bold;
}
</style>
