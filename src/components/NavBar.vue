<script setup>
import {ref} from 'vue';
import { defineEmits } from 'vue'

const emit = defineEmits(['scroll-contact'])

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("Menu toggled:", isMenuOpen.value);
};

const props = defineProps({
  isArrow: {
    type: [String],
    default: "False"
  }
})
</script>

<template>
  <nav class="navbar" :class="{ 'menu-open': isMenuOpen }">
    <div class="navbar-container layout-container">
      <router-link to="/" class="navbar-logo" active-class="active" exact>
        <span v-if="isArrow === 'True'" class="arrow-wrapper"><img id="home-arrow" src="../assets/arrow.svg" class="arrow-icon"></span>
        <span class="brand-name">HOME</span>
      </router-link>
      <button class="menu-toggle" :aria-expanded="isMenuOpen.toString()" @click="toggleMenu">
        <span class="menu-item">MENU</span>
        <span class="arrow-wrapper"><img src="../assets/arrow.svg" :class="['arrow-icon', { rotated: isMenuOpen }]"></span>
      </button>
      <div :class="['navbar-menu', { active: isMenuOpen }]">
        <ul class="menu-items">
          <li>
            <router-link to="/projects" class="menu-item" active-class="active" exact>PROJECTS -></router-link>
          </li>
          <li>
            <router-link to="/about" class="menu-item" active-class="active">ABOUT -></router-link>
          </li>
          <li>
            <router-link to="" class="menu-item" active-class="active" @click.prevent="() => { emit('scroll-contact'); isMenuOpen = false; }">CONTACT |></router-link>
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
  z-index: 1000;
  border-bottom: none;
}

.navbar::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background: linear-gradient( /* Border is drawn using a pseudo-element */
      to right,
      black 100%,
      transparent 0
  );
  pointer-events: visible;
}

/* When menu is open, cut 169px from the right */
.navbar.menu-open::after {
  background: linear-gradient(to right, black calc(100% - 199px), transparent 0);
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
  font-size: 20px;
  font-weight: 400;
  color: #000;
  padding-left: 5px;
}

.navbar-logo .arrow-icon {
  transform: rotate(90deg);
}

.arrow-icon {
  width: 15px;
  height: 15px;
  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg);
}

.arrow-icon.rotated {
  transform: rotate(90deg);
}

.arrow-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-wrapper img {
  display: block;
  vertical-align: middle;
  background: cornflowerblue;
  border: red solid 1px;
}

#home-arrow {
  transform: rotate(180deg);
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
  width: 200px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  background: transparent;
  border: 1px solid #000000;
  border-top: none;
  border-right: none;
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
  transition: font-size 0.3s ease-in-out;
}

span.menu-item {
  padding-right: 6px;
  border: red solid 1px;
}

@media (max-width: 640px) {
  .navbar::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
        to right,
        black 100%,
        transparent 0
    );
    transition: background 0.3s ease;
    pointer-events: none;
  }

  .navbar.menu-open::after {
    background: linear-gradient(to right, black calc(100% - 149px), transparent 0);
  }

  .brand-name {
    font-size: 16px;
    font-weight: 400;
    color: #000;
    padding-left: 5px;
  }

  span.menu-item {
    padding-right: 5px;
  }

  .arrow-icon {
    width: 12px;
    height: 12px;
    transition: transform 0.3s ease-in-out;
  }

  .menu-item {
    text-decoration: none;
    color: black;
    font-size: 16px;
    display: block;
    text-align: right;
    transition: font-size 0.3s ease-in-out;
  }

  .menu-items li:hover .menu-item{
    font-size: 20px;
  }

  .menu-items li {
    padding: 0.25rem 1.5rem 0.25rem 0;
  }

  .navbar-menu.active {
    display: block;
    max-height: 500px;
    width: 150px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* For Safari */
    background: transparent;
    border: 1px solid #000000;
    border-top: none;
    border-right: none;
  }
}

@media (min-width: 1536px) {
  .menu-items li {
    padding: 0.25rem 4rem 0.25rem 0;
  }

  .arrow-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease-in-out;
    transform: rotate(-90deg);
  }

  .menu-toggle {
    display: inline-flex;
    padding: 8px 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
