import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
    }
];

const router = createRouter({
    history: createWebHistory('/github-users-worker/'),
    routes,
});

export default router;