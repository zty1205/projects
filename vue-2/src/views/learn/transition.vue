<template>
  <div class="page">
    <h1>keep-alive</h1>
    <div class="body">
      <div class="block">
        <div class="inline-block-demo">
          <el-button v-on:click="show = !show">Toggle</el-button>
          <transition :appear="true" name="fade">
            <p v-if="show">hello</p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transition-demo",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

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
