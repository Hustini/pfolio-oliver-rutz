<template>
  <nav aria-label="breadcrumb" class="breadcrumb">
    <ol class="breadcrumb-list">
      <li
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
          :class="{ 'active': index === breadcrumbs.length - 1 }"
      >
        <router-link
            v-if="index !== breadcrumbs.length - 1"
            :to="breadcrumb.path"
            class="breadcrumb-link"
        >
          {{ breadcrumb.name }}
        </router-link>
        <span v-else class="breadcrumb-text">
          {{ breadcrumb.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Breadcrumb',
  setup() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
      const crumbs = [];

      // Ignore the ComingSoon route
      if (route.name === 'ComingSoon') {
        return crumbs;
      }

      // Add Home as the first breadcrumb for all routes except Home itself
      if (route.name !== 'Home') {
        crumbs.push({
          name: 'Home',
          path: '/home'
        });
      }

      // Add current route if it's not Home
      if (route.name && route.name !== 'Home') {
        crumbs.push({
          name: route.name,
          path: route.path
        });
      }

      return crumbs;
    });

    return { breadcrumbs };
  }
};
</script>

<style scoped>
.breadcrumb {
  padding: 0.75rem 1rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding: 0 0.5rem;
  color: #6c757d;
}

.breadcrumb-link {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-text {
  color: #6c757d;
}

.breadcrumb-item.active .breadcrumb-text {
  color: #495057;
  font-weight: 500;
}
</style>