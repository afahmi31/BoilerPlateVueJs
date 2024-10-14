import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Archives from '../pages/Archives.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/archives',
        name: 'Archives',
        component: Archives,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;