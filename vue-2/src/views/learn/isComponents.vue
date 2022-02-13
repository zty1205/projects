<template>
  <div>
    <el-button type="primary" @click="toggle">切换</el-button>
    <component :is="comp" ref="comp" :myProps="mp"></component>
  </div>
</template>

<script>
import Vue from "vue";
for (let i = 1; i < 5; i++) {
  Vue.component(`ad-${i}`, {
    render: function (h) {
      // 不应该使用箭头函数 否则会找不到this
      // console.log("in render this = ", this)
      return h(
        "div",
        {
          attrs: {
            id: `comp${i}`,
            class: "comp",
          },
        },
        [h("p", this.name)]
      );
    },
    props: ["myProps"],
    data() {
      return {
        name: `I am Component: ad-${i}`,
      };
    },
    created() {
      // console.log(`created`)
    },
    mounted() {
      console.log(`mounted props = `, this.myProps);
    },
  });
}

export default {
  name: "isComponent",
  data() {
    return {
      comp: "ad-1",
      idx: 1,
      mp: [1, 2, 3, 4],
    };
  },
  methods: {
    toggle() {
      if (this.idx === 4) {
        this.idx = 0;
      }
      this.idx++;
      this.comp = `ad-${this.idx}`;
    },
  },
};
</script>

<style lang="scss"></style>
