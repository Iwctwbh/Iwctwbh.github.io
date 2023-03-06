import {createRouter, createWebHistory} from "vue-router";

// 公共路由
export const constantRoutes = [
    {
        path: "/Tools/Home",
        name: "首页 Home Page",
        component: () => import("../views/Home.vue")
    },
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
