import Vue from 'vue'
import VueRouter from 'vue-router'
import Modal from './modal/Modal'
import App from './App'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/:id',
            name: 'modal',
            component: Modal
        }

    ]
})