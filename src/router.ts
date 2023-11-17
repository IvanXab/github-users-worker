import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import("@/pages/HomePage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory('/github-users-worker/'),
  routes,
});

export default router;