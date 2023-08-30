import {createRouter, createWebHistory} from 'vue-router'
import mainBlog from '../views/mainBlog.vue'
import allArticle from "../components/ArticleList/allArticle.vue";
import labelArticle from "../components/ArticleList/labelArticle.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: mainBlog,
        children: [
            {
                path: '/all',
                name: 'allArticle',
                component: allArticle,
            },
            {
                path: '/all/:label',
                name: '',
                component: labelArticle,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router