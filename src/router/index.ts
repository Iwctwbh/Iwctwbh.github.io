import {createRouter, createWebHistory} from "vue-router";

// 公共路由
export const constantRoutes = [
    {
        // 非路由节点，重定向至首页
        path: "/:pathMatch(.*)*",
        redirect: "/Tools/Home"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
});

export default router;
