import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Home from '../components/home/home'
import Classify from '../components/home/classify'
import ShopCart from '../components/home/shoppingcart'
import User from '../components/home/user'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path: '/index',
            component : Index,
            children: [
                { path: '/home', component: Home },
                { path: '/classify', component: Classify },
                { path: '/shopCart', component: ShopCart },
                { path: '/user', component: User },
                { path: '', redirect: '/home' },
            ]
        },
        { path: '/list', component:()=>import('../components/goodsList') },
        { path: '/detail', component:()=>import('../components/detail') },
        { path: '/register', component:()=>import('../components/register') },
        { path: '/login', component:()=>import('../components/login') },
        { path: '*', redirect: '/index' }
    ]
})
