<template>
  <div class="page">
    <h1>transition-group</h1>
    <div class="body">
      <div class="block">
        <div class="inline-block-demo">
          <el-button @click="add">Add</el-button>
          <el-button @click="remove">Remove</el-button>
          <el-button @click="swap">swap</el-button>
          <transition-group name="list-complete" tag="p">
            <span
              v-for="item in items"
              :key="item"
              class="list-complete-item"
              >{{ item }}</span
            >
          </transition-group>
          <div>
            <span
              v-for="item in items"
              :key="item"
              class="list-complete-item"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
transition-group不是一个抽象的组件，会渲染一个真实的dom节点，默认为span，可以通过prop一个tag指定渲染的dom节点
transition-group同样也是基于slot的思想实现的
transition-group组件会对比上一次渲染的children和本次渲染的children。 两次都渲染的节点会放在kept的数组上，第一次update（patch）时会渲染 children为kept，第二次update才是执行真正意义的渲染。以添加一项为例。第二次渲染时，才会渲染添加的节点。
缓动效果和moveClass。 在新添加的节点如果会使其他v-for渲染的节点的位置发生改变，那么vue会添加一个缓动效果。即将已经移动的节点，通过style translate 移动至原来的位置（通过原生API - getBoundingClientRect()计算新旧children判断节点是否移动过），然后所有的节点添加moveClass， 之后清空该style的translate，那么节点就会移动到本应该存在的位置，此时moveClass会执行动画效果， 最后，通过addEventListener绑定transitionEndEvent， 做一些清理操作
源码是这样解释的：
因为vdom的子更新算法是“不稳定的” - 即它不保证被移除元素的相对定位，
我们强制transition-group将其子项更新为两遍：
在第一遍中，我们删除了所有需要删除的节点，触发他们的离开过渡;  （没有需删除就不删）
在第二遍中，我们插入/移动节点进入最终所需状态 这种方式在第二遍中删除了节点将保留在应有的位置。
transition-group和transition也是在data上扩展transition相关的属性，在相应的时间在节点上添加和上传对应的class。
transition-group，需要key值来判断新旧节点的不同，来维护kept
*/
export default {
  name: "transition-demo",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      nextNum: 7,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    swap() {
      let index1 = 2;
      let index2 = 4;
      let arr = this.items;
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.list-complete-item {
  display: inline-block;
  margin-right: 10px;
}
.list-complete-move {
  transition: all 1s;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-enter-active {
  transition: all 1s;
}
.list-complete-leave-active {
  transition: all 1s;
  position: absolute;
}

.body {
  .inline-block-demo {
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 16px;
    padding: 12px 16px;
    margin: 10px 10px 4px 10px;
    min-width: 180px;
    min-height: 80px;
  }
}
</style>
