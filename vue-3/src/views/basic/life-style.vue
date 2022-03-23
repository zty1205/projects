<template>
  <div>
    <button @click="addToCart">Add to cart</button>
    <p>Cart({{ cart }})</p>
    <life-child />
  </div>
</template>

<script>
import { ref } from 'vue';
import lifeChild from './components/life-child.vue';
export default {
  components: {
    lifeChild
  },

  setup() {
    console.log('life-style setup');
    let cart = ref(0);
    function addToCart() {
      cart.value++;
    }
    return {
      cart,
      addToCart
    };
  },
  // setup在beforeCreate， created前
  beforeCreate() {
    console.log('life-style beforeCreate');
  },
  created() {
    console.log('life-style created');
  },
  beforeMount() {
    console.log('life-style beforeMount');
  },
  mounted() {
    console.log('life-style mounted');
  },
  // 跟踪虚拟 DOM 重新渲染时调用。钩子接收 debugger event 作为参数。
  // 此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
  renderTracked(obj) {
    // { key, target, type }
    // 这里的type是get
    console.log('left-style renderTracked =', obj);
  },
  // 当虚拟 DOM 重新渲染被触发时调用。和 renderTracked 类似，接收 debugger event 作为参数。
  // 此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。
  renderTriggered(obj) {
    // { key, target, type }
    // 这里的type是set
    console.log('left-style renderTriggered =', obj);
  }
};
</script>

<style></style>
