<template>
  <div>
    <div class="box">count in store: {{ $store.state.count }}</div>
    <div class="box">getter: {{ gets }}</div>
    <div>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button type="primary" @click="addNum">+5</el-button>
      <el-button type="primary" @click="sAdd">异步添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  mounted() {
    console.log("store = ", this.$store);
  },
  computed: {
    gets() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    add() {
      this.$store.commit("addCount");
    },
    addNum() {
      this.$store.commit("addSome", 5);
    },
    sAdd() {
      setTimeout(() => {
        this.$store.dispatch("add");
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin: 10px auto;
}
</style>
