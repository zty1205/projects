<template>
  <div class="page">
    <div>child</div>
  </div>
</template>

<script>
import CsLifeMixins from '@/mixins/cs-life.js';

export default {
  name: 'life-style-child',
  mixins: [CsLifeMixins],
  data() {
    return {
      csPrefix: 'child'
    };
  },
  beforeCreate() {
    console.log(`::: child beforeCreate :::`);
  }
};
</script>

<style lang="scss" scoped></style>
