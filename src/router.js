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
    { path: '/projectsDetail/:imgPath/:title/:tags/:time/:text/:link', name: 'ProjectDetail', component: ProjectDetail },
    { path: '/', name: 'ComingSoon', component: tmpSite },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
});

export default router;
