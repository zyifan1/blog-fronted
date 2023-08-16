import {createRouter, createWebHistory} from 'vue-router'
import mainBlog from '../views/mainBlog.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: mainBlog,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router