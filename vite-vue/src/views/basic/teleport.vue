<template>
  <div class="page-teleport">
    <div>这个是父组件</div>
    <div>teleport组件会在父组件的位置留下teleport-start和teleport-end的两个注释节点</div>
    <button class="btn" @click="toggleShow">切换</button>
    <div id="child"></div>
    <div id="child1"></div>
  </div>
  <teleport to="#app">
    <div>这个是teleport1</div>
  </teleport>
  <teleport to="body">
    <div>这个是teleport2</div>
  </teleport>
  <teleport to="#child">
    <div>这个teleport会因为渲染时父组件dom节点还未生成而不显示</div>
  </teleport>
  <teleport to="#child1">
    <div v-if="show"><div>渲染失败</div></div>
  </teleport>
  <teleport to="#child1" disabled>
    <div v-if="show"><div>渲染失败</div></div>
  </teleport>
  <teleport to="#child1" v-if="show">
    <div><div>渲染失败</div></div>
  </teleport>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';

const show = ref(false);

const toggleShow = () => {
  show.value = !show.value;
};

// onMounted(() => {
//   nextTick(() => {
//     show.value = true; // 失败 报错
//   });
// });

// 总结 teleport 要插到父节点之外
</script>

<style lang="less" scoped>
.page-teleport {
  border: 1px solid #ccc;
  padding: 12px;
}
.btn {
  color: #fff;
  width: 200px;
  text-align: center;
  padding: 6px 12px;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  border-radius: 2em;
  margin: 0 12px;
}
</style>
