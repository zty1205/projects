<template>
  <div class="page">
    <h2>vue 动态添加路由</h2>

    <div>
      <el-button type="primary" @click="add">动态添加</el-button>
    </div>
    <div class="item" v-for="item in routes" :key="item.id">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import dy from "./dy.vue";
export default {
  name: "dy-route",
  data() {
    return {
      routes: [],
      number: 0,
    };
  },
  methods: {
    add() {
      this.number++;
      this.number === 1 &&
        this.$router.addRoute({
          path: "/vue-router/dy-path/:id",
          name: "vue动态添加的路由",
          component: dy,
        });

      this.routes.push({
        path: `/vue-router/dy-path/${this.number}`,
        name: `动态路由${this.number}`,
        id: this.number,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin: 10px 2px;
}
</style>
