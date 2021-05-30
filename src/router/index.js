import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { Message } from "element-ui";

Vue.prototype.$message = Message;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user",
    name: "User",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/User.vue")
  },
  {
    path: "/history",
    name: "History",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/History.vue")
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Search.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next();
  } else {
    let token = sessionStorage.getItem("token");
    if (token) {
      next();
    } else {
      Message.error("请登录");
      next("/");
    }
  }
});

export default router;
