<template>
  <div>
    <p>vue 依赖注入</p>
    <p>provide inject</p>
    <p>下面是injecti的子组件</p>
    <injecter></injecter>
  </div>
</template>

<script>
import injecter from "./injecter";
export default {
  name: "vue_provider",
  components: { injecter },
  provide() {
    return {
      _par: this,
      foo: "foo",
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
