export default [
  {
    path: "/vue/v-model",
    component: () => import("@/views/learn/vModel.vue"),
    title: "v-model组件示例",
  },
  {
    path: "/vue/v-directive",
    component: () => import("@/views/learn/v_directive.vue"),
    title: "v-directive示例",
  },
  {
    path: "/vue/keep-alive",
    component: () => import("@/views/learn/keep-alive.vue"),
    title: "keep-Alive组件示例",
  },
  {
    path: "/vue/transition",
    component: () => import("@/views/learn/transition.vue"),
    title: "transition组件示例",
  },
  {
    path: "/vue/transition-group",
    component: () => import("@/views/learn/transition-group.vue"),
    title: "transition-group组件示例",
  },
  {
    path: "/vue/is-components",
    component: () => import("@/views/learn/isComponents.vue"),
    title: "components组件示例",
  },
  {
    path: "/vue/store",
    component: () => import("@/views/learn/store.vue"),
    title: "vuex示例",
  },
  {
    path: "/vue/life-style",
    component: () => import("@/views/learn/life-style.vue"),
    title: "vue生命周期",
    name: "life-style",
  },
  {
    path: "/vue/provide-inject",
    component: () => import("@/views/learn/provider.vue"),
    title: "vue依赖注入provide-inject",
    name: "provide-inject",
  },
  {
    path: "/vue/msg",
    component: () => import("@/views/learn/v_parent.vue"),
    title: "vue通信方式$attr",
    name: "msg-attr",
  },
];
