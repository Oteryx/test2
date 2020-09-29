import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from '../views/app'
import Hello from '../views/Hello'
import Home from '../views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/' ,
            name: 'hello',
            component: Hello
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
