import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Task1 from "../pages/Task1.vue";
import Task2 from "../pages/Task2.vue";

const routes: Array<RouteRecordRaw> = [
  { path: '/task1', component: Task1, name: 'task1' },

  { path: '/task2', component: Task2, name: 'task2' },

  { path: '/', redirect: '/task1' },

  { path: "/:pathMatch(.*)", redirect: "/task1" }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;