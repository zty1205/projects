<template>
  <div>
    <input type="el-input" :value="val" :zty="zty" @change="onChange($event)" />
  </div>
</template>

<script>
function reverseString(str) {
  return str ? str.split("").reverse().join("") : "";
}
export default {
  data() {
    return {
      zty: "hhh",
    };
  },
  model: {
    prop: "val",
    event: "change",
  },
  props: {
    val: String,
  },
  methods: {
    onChange(e) {
      console.log("e = ", e); // 必写$event
      this.$emit("change", reverseString(e.target.value));
    },
  },
};
</script>

<style lang="scss" scoped></style>
