<template>
  <div class="page">
    <h2>vue 生命周期</h2>

    <div>
      <div>count: {{ count }}</div>
      <div>
        <el-button type="primary" @click="add">添加</el-button>
      </div>
    </div>
    <child />
    <div>
      <router-link to="/vue/v-model">跳转v-model</router-link>
    </div>
  </div>
</template>

<script>
import CsLifeMixins from '@/mixins/cs-life.js';
import child from './components/life-child.vue';

export default {
  name: 'left-style',
  components: { child },
  mixins: [CsLifeMixins],
  data() {
    return {
      count: 1,
      csPrefix: 'LifeStyle'
    };
  },
  beforeCreate() {
    console.log(`::: LifeStyle beforeCreate :::`);
    // console.log('beforeCreate this = ', this);
  },
  created() {
    // console.log('created this = ', this);
  },
  beforeMount() {
    // console.log('beforeMount dom.page = ', document.querySelector('.page'));
  },
  mounted() {
    // console.log('mounted dom.page = ', document.querySelector('.page'));
  },
  updated() {
    // 拿不到更新的属性，需要使用computer或watcher
  },
  beforeDestroy() {
    // console.log('beforeDestroy this = ', this);
  },
  destroyed() {
    // console.log('destroyed this = ', this);
  },
  methods: {
    add() {
      this.count += 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
