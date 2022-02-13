<template>
  <div class="page">
    <h1>keep-alive</h1>
    <div class="body">
      <div class="block">
        <div class="inline-block-demo">
          <p>不使用keep-alive组件</p>
          <component :is="noKeep" ref="comp1"></component>
          <el-button type="primary" @click="toggle('noKeep')">切换</el-button>
          <el-button type="primary" @click="showRef">showRef</el-button>
        </div>

        <div class="inline-block-demo">
          <p>使用component标签</p>
          <keep-alive>
            <component :is="currentComp"></component>
          </keep-alive>
          <el-button type="primary" @click="toggle('currentComp')"
            >切换</el-button
          >
        </div>

        <div class="inline-block-demo">
          <p>使用v-if命令</p>
          <keep-alive>
            <comp-a v-if="currentIf === 'compA'"></comp-a>
            <comp-b v-else></comp-b>
          </keep-alive>
          <el-button type="primary" @click="toggle('currentIf')"
            >切换</el-button
          >
        </div>
      </div>

      <div class="block">
        <div class="inline-block-demo">
          <p>使用include命令</p>
          <keep-alive :include="['compB', 'compC']">
            <component :is="currentCompInclude"></component>
          </keep-alive>
          <el-button
            v-for="item in compList"
            :key="item"
            type="primary"
            @click="currentCompInclude = `comp${item}`"
          >
            切换{{ item }}
          </el-button>
        </div>

        <div class="inline-block-demo">
          <p>使用exclude命令</p>
          <keep-alive :exclude="/compA|compD/">
            <component :is="currentCompExclude"></component>
          </keep-alive>
          <el-button
            v-for="item in compList"
            :key="item"
            type="primary"
            @click="currentCompExclude = `comp${item}`"
          >
            切换{{ item }}
          </el-button>
        </div>
      </div>

      <div class="block">
        <div class="inline-block-demo">
          <p>规定max活动数</p>
          <keep-alive :max="2">
            <component :is="currentCompMax"></component>
          </keep-alive>
          <el-button
            v-for="item in compList"
            :key="item"
            type="primary"
            @click="currentCompMax = `comp${item}`"
          >
            切换{{ item }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

const compList = ["A", "B", "C", "D"];
for (let i = 0, len = compList.length; i < len; i++) {
  let tag = compList[i];
  Vue.component(`comp${tag}`, {
    render: function (h) {
      // 不应该使用箭头函数 否则会找不到this
      // console.log("in render this = ", this)
      return h(
        "div",
        {
          attrs: {
            id: `comp${tag}`,
            class: "comp",
          },
        },
        [h("p", this.name)]
      );
    },
    data() {
      return {
        name: `I am Component-${tag}`,
      };
    },
    created() {
      console.log(`Comp ${tag} created`);
    },
    mounted() {
      console.log(`Comp ${tag} mounted`);
    },
    destroyed() {
      console.log(`Comp ${tag} mounted`);
    },
    activated() {
      console.log(`Comp ${tag} activated`);
    },
    deactivated() {
      console.log(`Comp ${tag} deactivated`);
    },
  });
}

/*
  keep-alive组件一个内置抽象组件，通过自定义render函数，并利用了插槽的思想
  keep-alive组件的渲染分为首次渲染和缓存渲染，
    当命中缓存，则不会再执行created和mounted钩子函数，而会执行activate的钩子函数，
    销毁时也不会执行destroyed钩子函数，而是会执行deactivated钩子函数 
 */

export default {
  name: "keepAliveDemo", // 不能取名keepAlive 栈溢出
  data() {
    return {
      compList: compList,
      noKeep: "compA",
      currentComp: "compA",
      currentIf: "compA",
      // include 和 exclude 属性允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示
      // 正则和数组需要配合v-bind使用
      currentCompInclude: "compA",
      currentCompExclude: "compA",
      currentCompMax: "compA",
    };
  },
  methods: {
    toggle(key) {
      this[key] = this[key] === "compA" ? "compB" : "compA";
    },
    showRef() {
      console.log("ref = ", this.$refs.comp1); // ref还有效果
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  .inline-block-demo {
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 16px;
    padding: 12px 16px;
    margin: 10px 10px 4px 10px;
    min-width: 180px;
  }
}
</style>
