<template>
  <div class="page">
    <div class="content">
      <button class="route-btn" v-for="item in pathRoutes" :key="item.path" @click="jump(item)">
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

    const allRoutes = router.options.routes.filter((p) => p.path !== '/');
    const pathRoutes = [];
    for (let rou of allRoutes) {
      if (rou.children) {
        for (let child of rou.children) {
          pathRoutes.push({
            path: `${rou.path}/${child.path}`,
            title: child.meta.title
          });
        }
      } else {
        pathRoutes.push({
          path: rou.path,
          title: rou.meta.title
        });
      }
    }

    const jump = (item) => {
      router.push(item.path);
    };

    return {
      pathRoutes,
      jump
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  padding: 12px 24px;
}
.route-btn {
  color: #fff;
  width: 200px;
  text-align: center;
  padding: 12px 24px;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  border-radius: 2em;
  margin: 4px 12px;
}
</style>
