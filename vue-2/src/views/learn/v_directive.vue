<template>
  <div class="page">
    <h1>v-model</h1>
    <div class="body">
      <div class="block">
        <div class="inline-block-demo">
          <p>v-focus 自动聚焦</p>
          <el-input v-focus v-model="input1" :maxlength="10" />
        </div>

        <div class="inline-block-demo">
          <p v-color="red">v-color 自动聚焦</p>
          <el-input v-model="input1" :maxlength="10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.directive("color", {
  inserted(el, binding, vnode, oldVnode) {
    console.log("el = ", el);
    console.log("binding = ", binding);
    console.log("vnode = ", vnode);
    console.log("oldVnode = ", oldVnode);
    el.style.color = binding.value;
  },
});

export default {
  directives: {
    focus: {
      inserted: function (el) {
        console.log("el = ", el);
        el.focus();
      },
    },
  },
  data() {
    return {
      input1: "",
      red: "red",
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  .inline-block-demo {
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 16px;
    padding: 12px 16px;
    margin: 10px 10px 4px 10px;
    min-width: 240px;
    min-height: 200px;
    vertical-align: middle;
  }
}
</style>
