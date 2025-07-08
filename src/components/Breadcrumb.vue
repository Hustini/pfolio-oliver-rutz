<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Breadcrumb',
  props: {
    lastItem: {
      type: String,
      default: ''
    }
  },
  setup(props) {
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
          name: 'HOME',
          path: '/'
        });
      }

      // Add current route if it's not Home and change route if it's ProjectDetail
      if (route.name && route.name !== 'Home') {
        if (route.name === 'ProjectDetail') {
          crumbs.push({
            name: 'PROJECTS',
            path: route.path
          });
        } else if (!props.lastItem) {
          crumbs.push({
            name: route.name.toUpperCase(),
            path: route.path
          });
        }
      }

      // Add the custom last item if provided
      if (props.lastItem) {
        crumbs.push({
          name: props.lastItem.toUpperCase(),
          path: route.path
        });
      }

      return crumbs;
    });

    return {breadcrumbs};
  }
};
</script>

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

<style scoped>
.breadcrumb {
  height: 1.25em;
  display: flex;
  align-items: center;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #000000;
  font-size: 1.25em;
  align-items: center;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  color: #000000;
  height: 100%;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  display: inline-block;
  color: #000000;
  font-size: 1em;
  text-align: center;
}

.breadcrumb-link {
  text-decoration: none;
  color: #000000;
  font-size: 1.25rem;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-text {
  color: #000000;
  font-size: 1.25rem;
}

.breadcrumb-item.active .breadcrumb-text {
  font-weight: 500;
}

@media (max-width: 640px) {
  .breadcrumb-link {
    text-decoration: none;
    color: #000000;
    font-size: 0.75rem;
  }

  .breadcrumb-text {
    color: #000000;
    font-size: 0.75rem;
  }

  .breadcrumb-item + .breadcrumb-item::before {
    content: ">";
    display: inline-block;
    color: #000000;
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>