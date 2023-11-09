import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/',name: 'Home',component: () => import('../views/Dashboard.vue')},
    { path: '/data',name: 'Data',component: () => import('../views/Data.vue')},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;