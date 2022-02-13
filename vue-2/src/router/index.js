import Vue from "vue";
import Router from "vue-router";
import learn from "./learn";
import demo from "./demo";

Vue.use(Router);

const routes = [
  {
    path: "",
    // route level code-splitting
    // this generates a separate chunk (Index.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步加载组件
    component: () =>
      import(/* webpackChunkName: "Index" */ "@/views/index.vue"),
    title: "首页",
  },
  ...learn,
  ...demo,
];

export default new Router({
  base: process.env.BASE_URL,
  routes: routes,
});

export { routes };
