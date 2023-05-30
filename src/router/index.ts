import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { name: 'slide', path: '/', component: () => import('@/components/pages/slide') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router