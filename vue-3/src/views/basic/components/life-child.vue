<template>
  <div></div>
</template>

<script>
export default {
  setup() {
    console.log('life-child setup');
    return {};
  },
  beforeCreate() {
    console.log('life-child beforeCreate');
  },
  created() {
    console.log('life-child created');
  },
  beforeMount() {
    console.log('life-child beforeMount');
  },
  mounted() {
    console.log('life-child mounted');
  }
};
</script>

<style></style>
