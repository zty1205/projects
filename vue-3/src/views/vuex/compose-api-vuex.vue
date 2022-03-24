<template>
  <div>
    <div>count: {{ count }}</div>
    <div>count: {{ getCount }}</div>
    <div class="btn-wrap">
      <button class="basic-btn" @click="setCount">同步增加+1</button>
      <button class="basic-btn" @click="asyncSetCount">异步随机增加</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

const count = computed(() => store.state.count);

const getCount = computed(() => store.getters.getCount);

const setCount = () => store.commit('SET_COUNT', 1);

const asyncSetCount = () => store.dispatch('setCount', 10);
</script>

<style scoped>
.btn-wrap {
  margin-top: 12px;
}
</style>
