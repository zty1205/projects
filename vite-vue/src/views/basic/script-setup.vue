<template>
  <div>
    <div><a href="https://v3.cn.vuejs.org/api/sfc-script-setup.html" target="_blank">sfc-script-setup</a></div>
    <div>
      <ul v-my-directive>
        <li v-for="(str, idx) in superiority" :key="idx">{{ str }}</li>
      </ul>

      <ul>
        <li v-for="(str, idx) in syntax" :key="idx">{{ str }}</li>
      </ul>

      <div class="c-box">
        <child ref="childComp" :count="childCount" @change="childChange" />
      </div>

      <div class="c-box">
        <pre>
        {{ preCode }}
       </pre
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue';
import child from './components/sfc-child.vue';
console.log(
  '%c里面的代码会被编译成组件 setup() 函数的内容。这意味着与普通的 <script> 只在组件被首次引入的时候执行一次不同， <script setup> 中的代码会在每次组件实例被创建的时候执行。',
  'color:red;'
);

// 全局声明和import的变量和函数，组件都可以 `直接` 在模板使用

const superiority = [
  '更少的样板内容，更简洁的代码。',
  '能够使用纯 Typescript 声明 props 和抛出事件。',
  '更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。',
  '更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。'
];

const syntax = [
  '全局声明和import的变量和函数，组件都可以 `直接` 在模板使用',
  '自定义指令：必须以 name + Directive 的形式来命名本地自定义指令，例如vMyDirective, 以使得它们可以直接在模板中使用。',
  'prop和emit：必须使用 defineProps 和 defineEmits API 来声明 props 和 emits ，它们具备完整的类型推断并且在 <script setup> 中是直接可用的：',
  '暂时发现可以使用getCurrentInstance().emit来触发事件'
];

const vMyDirective = {
  beforeMount: (...args) => {
    console.log('beforeMount args = ', args);
  }
};

const props = defineProps({
  foo: String
});

const emits = defineEmits(['change']);

const childCount = ref(1);
const childChange = function (val) {
  console.log('来自子组件的事件', val);
  childCount.value += val;
};

const childComp = ref(null);
const ccp = ref(null);

onMounted(() => {
  // DOM 元素将在初始渲染后分配给 ref
  // 在虚拟 DOM 补丁算法中，如果 VNode 的 ref 键对应于渲染上下文中的 ref，则 VNode 的相应元素或组件实例将被分配给该 ref 的值。这是在虚拟 DOM 挂载/打补丁过程中执行的，因此模板引用只会在初始渲染之后获得赋值。

  console.log('childComp = ', childComp.value); // 子组件的ref引用 变量名和子组件ref名称一致
  console.log('ccp = ', ccp.value);
});

// 不加\ 报错
const preCode = `
<\script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}
<\/script>

<template>
  <div @click="log">{{ msg }}</div>
</template>`;
</script>

<style lang="less" scoped>
.c-box {
  padding: 16px 12px;
  border: 1px solid #ccc;
  margin: 10px 0;

  pre {
    margin: 0;
  }
}
</style>
