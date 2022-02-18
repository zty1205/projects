import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/views/home.vue'), meta: { title: '首页' } },
  {
    path: '/basic',
    component: () => import('@/views/basic/index.vue'),
    meta: { title: 'Vue' },
    children: [
      {
        path: 'compose-api',
        name: 'compose-api',
        component: () => import('@/views/basic/compose-api.vue'),
        meta: {
          title: 'Vue组合式API'
        }
      },
      {
        path: 'script-setup',
        name: 'script-setup',
        component: () => import('@/views/basic/script-setup.vue'),
        meta: {
          title: 'Vue Script setup写法'
        }
      }
    ]
  },
  {
    path: '/router',
    component: () => import('@/views/router/index.vue'),
    meta: { title: 'Router' },
    children: [
      {
        path: 'compose-api-router',
        name: 'compose-api-router',
        component: () => import('@/views/router/compose-api-router.vue'),
        meta: {
          title: '路由组合式API'
        }
      }
    ]
  }
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
});

router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title);
  next();
});

export default router;
