<template>
  <div class="page">
    <div v-for="name in list" :key="name">
      <fun-comp :title="name"></fun-comp>
    </div>
  </div>
</template>

<script>
import { demo1 } from '@/components/func-comp';
export default {
  components: {
    funComp: demo1
  },
  data() {
    return {
      list: ['小明', '小张']
    };
  }
};
</script>

<style></style>
