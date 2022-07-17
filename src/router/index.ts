import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheLayout from '../components/TheLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
  path: "/",
    name: "TheLayout",
    component: TheLayout,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
