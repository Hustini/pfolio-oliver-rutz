// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from "@/views/Projects.vue";
import ProjectDetail from "@/views/ProjectDetail.vue"
import tmpSite from "@/views/tmpSite.vue";

const routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/projectsDetail', name: 'ProjectDetail', component: ProjectDetail },
    { path: '/', name: 'ComingSoon', component: tmpSite },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Keep scroll on same-page interactions
        if (to.path === from.path) return false;

        // Support saved positions (back/forward)
        if (savedPosition) return savedPosition;

        // Hash navigation
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }

        // Default scroll to top for real page changes
        return { top: 0 };
    }
});

export default router;
