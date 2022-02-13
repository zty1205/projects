<template>
  <div class="box">
    <h2>孙子组件</h2>
    <el-button type="primary" @click="doMsg">发送消息</el-button>

    <div class="mt">来着eventBus的消息： {{ eventMsg }}</div>
  </div>
</template>

<script>
import eventBus from "../../eventBus";
export default {
  name: "Index",
  data() {
    return {
      eventMsg: "",
    };
  },
  mounted() {
    eventBus.$on("trigger_event", (e) => {
      this.eventMsg = e;
    });
  },
  methods: {
    doMsg() {
      this.$emit("acceptMsg", "这是来自孙子组件的消息");
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
}
.mt {
  margin-top: 4px;
}
</style>
