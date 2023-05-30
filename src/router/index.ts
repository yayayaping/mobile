import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { name: 'home', path: '/', component: () => import('../components/pages/home') },
    { name: 'search', path: '/search', component: () => import('../components/pages/search') },
    { name: 'finance', path: '/finance', component: () => import('../components/pages/finance') },
    { name: 'refund', path: '/refund', component: () => import('../components/pages/refund') },
    { name: 'opasst', path: '/opasst', component: () => import('../components/pages/opasst') },
    { name: 'message', path: '/message', component: () => import('../components/pages/message') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router