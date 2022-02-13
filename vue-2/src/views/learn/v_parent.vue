<template>
  <div class="container">
    <h2>父组件</h2>
    <p>下面是子组件</p>
    <v-child :title="title" :msg="msg" @acceptMsg="acceptMsg"></v-child>
    <div class="box">
      {{ aptMsg }}
    </div>
    <div>
      <el-button type="primary" @click="emitEventBus">eventBus emit</el-button>
    </div>
  </div>
</template>

<script>
import v_child from "./v_child";
import eventBus from "../../eventBus";
console.log("eventBus = ", eventBus);
export default {
  name: "v_parent",
  components: { vChild: v_child },
  data() {
    return {
      title: "来之父组件的title",
      msg: "it is msg",
      aptMsg: "",
    };
  },
  mounted() {},
  methods: {
    acceptMsg(msg) {
      this.aptMsg = msg;
    },
    emitEventBus() {
      eventBus.$emit("trigger_event", "msg");
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid #ccc;
  margin: 10px auto;
  padding: 10px;
  width: 200px;
  height: 200px;
}
.container {
  font-size: 0.36rem;
}
</style>
