<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="https://flowbite.com/" class="navbar-logo">
        <img src="https://flowbite.com/docs/images/logo.svg" class="logo" alt="Flowbite Logo" />
        <span class="brand-name">Flowbite</span>
      </a>
      <button class="menu-toggle" aria-controls="navbar-menu" aria-expanded="false" @click="toggleMenu">
        <span class="sr-only">Open main menu</span>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div :class="['navbar-menu', { active: isMenuOpen }]">
        <ul class="menu-items">
          <li><a href="#" class="menu-item active">Home</a></li>
          <li><a href="#" class="menu-item">About</a></li>
          <li><a href="#" class="menu-item">Services</a></li>
          <li><a href="#" class="menu-item">Pricing</a></li>
          <li><a href="#" class="menu-item">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* General Navbar Styles */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

.navbar-container {
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 16px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 32px;
}

.brand-name {
  font-size: 24px;
  font-weight: 600;
  margin-left: 8px;
  color: #333;
}

/* Menu Toggle Button */
.menu-toggle {
  display: inline-flex;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 20px;
  height: 20px;
  stroke: #333;
}

/* Navbar Menu */
.navbar-menu {
  display: none; /* Hide the menu by default */
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #f8f8f8;
  transition: all 0.3s ease-in-out; /* Smooth transition */
  max-height: 0; /* Start with no height */
  overflow: hidden; /* Hide overflow */
}

.navbar-menu.active {
  display: block; /* Show the menu when active */
  max-height: 500px; /* Set a max-height when menu is open (adjust as necessary) */
}

.menu-items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  padding: 12px 16px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: block;
}

.menu-item:hover {
  background-color: #f0f0f0;
  color: #007bff;
}

.menu-item.active {
  background-color: #007bff;
  color: white;
}

/* Mobile and Desktop Styles */
@media (min-width: 768px) {
  .navbar-menu.active {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    width: 100%;
  }

  .menu-items {
    flex-direction: column;
    width: 100%;
  }

  .menu-item {
    text-align: center;
    padding: 16px;
    width: 100%;
  }

  /* Keep the hamburger menu visible at all times */
  .menu-toggle {
    display: inline-flex;
  }
}
</style>
