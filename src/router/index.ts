// 管理路由
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 导入 layout
import layout from '@/views/layout/index.vue'
let router = createRouter({
    // 设置路由模式
    history: createWebHistory(),
    // 设置路由对象
    routes: [
        {
            path: '/', component: layout,
            children: [
                { path: '', component: () => import('@/views/home/index.vue') },
                { path: 'join', component: () => import('@/views/joinus/index.vue') },
                { path: 'connection', component: () => import('@/views/contact_us/index.vue') },
                { path: 'privacy', component: () => import('@/views/privacy/index.vue') },
            ]
        },
    ]
})
// 暴露路由对象
export default router

