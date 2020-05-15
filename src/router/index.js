import Vue from 'vue'
import VueRouter from 'vue-router'
import vuep from '../views/vuep.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'vuep',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/vuep.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
