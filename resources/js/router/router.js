import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Forum from '../components/Forum/Forum';
import Category from '../components/Category/Category';
import AskQuestion from '../components/AskQuestion/AskQuestion';

const routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/forum',
        component: Forum
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/ask-question',
        component: AskQuestion
    }
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})


export default router;
