<template>
  <div>
    <h2>子组件</h2>
    <div class="title">{{ title }}</div>
    <p>attrs:{{ $attrs }}</p>
    <v-grandson v-bind="$attrs" v-on="$listeners"></v-grandson>
  </div>
</template>

<script>
import v_grandson from "./v_grandson";
export default {
  name: "v-child",
  components: { vGrandson: v_grandson },
  props: ["title"],
  inheritAttrs: false,
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 0.32rem;
  color: blue;
}
</style>
