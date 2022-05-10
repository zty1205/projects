<template>
  <div class="page">
    <div>这是动态添加路由页面，id: {{ id }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
