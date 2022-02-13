<template>
  <div class="page">
    <h2>vue 生命周期</h2>
    <router-link to="/vue/v-model">跳转v-model</router-link>
  </div>
</template>

<script>
export default {
  name: "left-style",
  data() {
    return {};
  },
  beforeCreate() {
    console.log("::: beforeCreate :::");
    console.log("beforeCreate this = ", this);
  },
  created() {
    console.log("::: created :::");
    console.log("created this = ", this);
  },
  beforeMount() {
    console.log("::: beforeMount :::");
    console.log("beforeMount dom.page = ", document.querySelector(".page"));
  },
  mounted() {
    console.log("::: mounted :::");
    console.log("mounted dom.page = ", document.querySelector(".page"));
  },
  beforeUpdate() {
    console.log("::: beforeUpdate :::");
  },
  updated() {
    console.log("::: updated :::");
  },
  activated() {
    console.log("::: activated :::");
  },
  deactivated() {
    console.log("::: deactivated :::");
  },
  beforeDestroy() {
    console.log("::: beforeDestroy :::");
    console.log("beforeDestroy this = ", this);
  },
  destroyed() {
    console.log("::: destroyed :::");
    console.log("destroyed this = ", this);
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
