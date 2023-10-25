import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import noAuthView from "@/views/NoAuthView.vue";
import adminView from "@/views/AdminView.vue";
import AccessEnum from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "题目",
    component: HomeView,
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: HomeView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: noAuthView,
  },
  {
    path: "/admin",
    name: "管理员可见",
    component: adminView,
    meta: {
      access: AccessEnum.ADMIN,
    },
  },

  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
