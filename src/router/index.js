import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/pages/manage'
import home from '@/pages/home'
import order_1 from '@/pages/order_1'
import order_2 from '@/pages/order_2'
import desc from '@/pages/desc'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component:manage,
            name: 'manage',
            children: [
                {
                path: '',
                component: home,
                meta: [],
                },
                {
                    path: '/order_1',
                    component: order_1,
                    meta: [],
                },
                {
                    path: '/order_2',
                    component: order_2,
                    meta: [],
                },
                {
                    path: '/desc',
                    component: desc,
                    meta: [],
                }
            ]
        }
        
    ]
})