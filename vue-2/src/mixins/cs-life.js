export default {
  computed: {
    csPrefixName() {
      return this.csPrefix || null;
    }
  },
  created() {
    console.log(`::: ${this.csPrefixName} created :::`);
  },
  beforeMount() {
    console.log(`::: ${this.csPrefixName} beforeMount :::`);
  },
  mounted() {
    console.log(`::: ${this.csPrefixName} mounted :::`);
  },
  beforeUpdate() {
    console.log(`::: ${this.csPrefixName} beforeUpdate :::`);
  },
  updated() {
    console.log(`::: ${this.csPrefixName} updated ::: `);
  },
  activated() {
    console.log(`::: ${this.csPrefixName} activated :::`);
  },
  deactivated() {
    console.log(`::: ${this.csPrefixName} deactivated :::`);
  },
  beforeDestroy() {
    console.log(`::: ${this.csPrefixName} beforeDestroy :::`);
  },
  destroyed() {
    console.log(`::: ${this.csPrefixName}  destroyed :::`);
  }
};
