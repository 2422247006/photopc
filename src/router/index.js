import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import manage from '@/pages/manage'
import home from '@/pages/home'
import order_1 from '@/pages/order_1'
import order_2 from '@/pages/order_2'
import desc from '@/pages/desc'
import ds from '@/pages/ds'
import finish_order from '@/pages/finish_order'
import performance from '@/pages/performance'
import performancebus from '@/pages/performancebus'
import nps from '@/pages/nps'
import npsbus from '@/pages/npsbus'
import npsDesc from '@/pages/npsDesc'
import printing from '@/pages/printing'
import ygadmin from '@/pages/ygadmin'
import closeorder from '@/pages/closeorder'
import addorder from '@/pages/addorder'
import addyg from '@/pages/addyg'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/manage',
            component: manage,
            name: 'manage',
            children: [
                {
                    path: '',
                    component: home,
                    name:{ tit:'概括',id:0,num:'1'},
                    meta: [],
                },
                {
                    path: '/order_1',
                    component: order_1,
                    name:{tit:'拍摄订单管理',id:0,num:'2-1'},
                    meta: [],
                },
               
                {
                    path: '/order_2',
                    component: order_2,
                    name: {tit:'排单表',id:0,num:'2-2'},
                    meta: [],
                },
                {
                    path: '/closeorder',
                    component: closeorder,
                    name: {tit:'批量操作排单',id:0,num:'2-3'},
                    meta: [],
                },
                {
                    path: '/desc',
                    component: desc,
                    name: {tit:'订单详情',id:1,num:'2-1'},
                    meta: [],
                },
                {
                    path: '/addorder',
                    component: addorder,
                    name:{tit:'新增订单',id:1,num:'2-1'},
                    meta: [],
                },
                {
                    path: '/ds',
                    component: ds,
                    name: {tit:'DS录入',id:1,num:'2-1'},
                    meta: [],
                },
                {
                    path: '/printing',
                    component: printing,
                    name: {tit:'打印订单',id:1,num:'2-1'},
                    meta: [],
                },
                {
                    path: '/finish_order',
                    component: finish_order,
                    name: {tit:'完成订单',id:1,num:'2-1'},
                    meta: [],
                },
                {
                    path: '/ygadmin',
                    component:ygadmin,
                    name: {tit:'员工管理',id:0,num:'3-2'},
                    meta: [],
                },
                {
                    path: '/addyg',
                    component:addyg,
                    name: {tit:'新增员工',id:1,num:'3-2'},
                    meta: [],
                },
                {
                    path: '/performance',
                    component:performance,
                    name: {tit:'个人绩效查询',id:0,num:'3-1-1'},
                    meta: [],
                },
                {
                    path: '/performancebus',
                    component:performancebus,
                    name: {tit:'门店绩效查询',id:0,num:'3-1-2'},
                    meta: [],
                },
                {
                    path: '/nps',
                    component:nps,
                    name: {tit:'个人NPS统计',id:0,num:'3-1-3'},
                    meta: [],
                },
                {
                    path: '/npsbus',
                    component:npsbus,
                    name: {tit:'门店NPS统计',id:0,num:'3-1-4'},
                    meta: [],
                },
                {
                    path: '/npsDesc',
                    component:npsDesc,
                    name: {tit:'nps评分详情',id:1,num:'3-1-3'},
                    meta: [],
                }
            ]
        }

    ]
})