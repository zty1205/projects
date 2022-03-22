<template>
  <div class="box">
    <div class="count">子组件的Prop Count: {{ count }}</div>
    <button class="count-btn" @click="addCount">增加</button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const props = defineProps({
  count: Number
});
const emits = defineEmits(['change']);

// 外层没有this 只找到了getCurrentInstance
// warn: getCurrentInstance 只暴露给高阶使用场景，典型的比如在库中。
// 强烈反对在应用的代码中使用 getCurrentInstance。请不要把它当作在组合式 API 中获取 this 的替代方案来使用。
const instance = getCurrentInstance();

const addCount = function () {
  // 没有this
  instance.emit('change', +1);
};

defineExpose({
  var: '这是子组件暴露的属性'
});
</script>

<style lang="less" scoped>
.box {
  display: flex;
  align-items: center;
}
.count {
  margin-right: 12px;
}
.count-btn {
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
