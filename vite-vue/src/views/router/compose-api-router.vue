<template>
  <div>
    <div class="content">
      <div class="item" v-for="item in apis" :key="item.title">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { RouterLink, onBeforeRouteLeave, onBeforeRouteUpdate, useRouter, useRoute, useLink } from 'vue-router';
console.log('RouterLink = ', RouterLink);

export default {
  props: {},
  setup(props) {
    const apis = reactive([
      {
        title: 'onBeforeRouteLeave',
        desc: '添加一个导航守卫，在当前位置的组件将要离开时触发。'
      },
      {
        title: 'onBeforeRouteUpdate',
        desc: '添加一个导航守卫，在当前位置即将更新时触发。'
      },
      {
        title: 'useLink',
        desc: '返回 v-slot API 暴露的所有内容。'
      },
      {
        title: 'useRoute',
        desc: '返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用。'
      },
      {
        title: 'useRouter',
        desc: '返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。'
      }
    ]);

    onBeforeRouteLeave((to, from, next) => {
      console.log(':::onBeforeRouteLeave:::');
      next();
    });

    onBeforeRouteUpdate((to, from, next) => {
      console.log(':::onBeforeRouteUpdate:::');
      next();
    });

    const router = useRouter();
    const route = useRoute();
    // const link = useLink(props);

    console.log('router = ', router);
    console.log('route = ', route);
    // console.log('link = ', link);

    return {
      apis
    };
  }
};
</script>

<style lang="less" scoped>
.item {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 15px 25px;
  margin-top: 1em;
  margin-bottom: 40px;
  .desc {
    color: #ccc;
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
