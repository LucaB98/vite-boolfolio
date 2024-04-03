// importo vue router
import { createRouter, createWebHistory } from 'vue-router';
// importo le pagine
import HomePage from '../pages/HomePage.vue';

// definisco le rotte

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

export { router };
