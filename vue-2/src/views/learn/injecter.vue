<template>
  <div>
    <p>vue 依赖注入</p>
    <p>这里是子组件</p>
    <p>从父组件传递的值：{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "vue_provider",
  inject: {
    foo: {
      from: "foo",
      default: "foo_default",
    },
    _par: {
      // 这个值也可以叫其他
      from: "_par", // 这里用到是provider的name
      default: () => {
        return "_par";
      },
    },
  },
  // inject: ["foo", "_par"],
  data() {
    return {};
  },
  computed: {
    title() {
      return this.foo;
    },
  },
  created() {
    console.log("foo = ", this.foo);
    console.log("_par = ", this._par);
  },
  mounted() {
    console.log(":::  mounted  :::");
    console.log("_par = ", this._par);
    console.log("foo = ", this.foo);
    console.log("_par = ", this._par);
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
