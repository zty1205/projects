<template>
  <div class="page">
    <h1>v-model</h1>
    <div class="body">
      <div class="block">
        <div class="inline-block-demo">
          <p>基础v-model-input</p>
          <input v-model="input1" :maxlength="10" />
          <p>输入： {{ input1 }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model-radio</p>
          <input type="radio" id="one" value="one" v-model="radio1" />
          <label for="one">One</label>
          <input type="radio" id="two" value="two" v-model="radio1" />
          <label for="two">Two</label>
          <p>值： {{ radio1 }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model-单CheckBox</p>
          <input
            type="checkbox"
            id="checkbox"
            value="checked"
            v-model="checkbox1"
          />
          <label for="checkbox">单</label>
          <p>值： {{ checkbox1 }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model-多选CheckBox</p>
          <input
            type="checkbox"
            id="checkbox1"
            value="one"
            v-model="mCheckbox"
          />
          <label for="checkbox1">one</label>
          <input
            type="checkbox"
            id="checkbox2"
            value="two"
            v-model="mCheckbox"
          />
          <label for="checkbox2">two</label>
          <input
            type="checkbox"
            id="checkbox3"
            value="three"
            v-model="mCheckbox"
          />
          <label for="checkbox3">three</label>
          <p>值： {{ mCheckbox }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model-单选Select</p>
          <select v-model="selected1">
            <option disabled value="">请选择</option>
            <option value="AA">A</option>
            <option value="BB">B</option>
            <option value="CC">C</option>
          </select>
          <p>值： {{ selected1 }}</p>
        </div>

        <!-- 如果 v-model 表达式的初始值未能匹配任何选项，
          <select> 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。
          因为这样的情况下，iOS 不会触发 change 事件。
          因此，更推荐像上面这样提供一个值为空的禁用选项。 -->

        <div class="inline-block-demo">
          <p>基础v-model-多选Select</p>
          <select multiple v-model="mSelected" style="width: 50px">
            <option value="AA">A</option>
            <option value="BB">B</option>
            <option value="CC">C</option>
            <option value="DD">D</option>
          </select>
          <p>值： {{ mSelected }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model.trim-input</p>
          <input v-model.trim="inputTrim" :maxlength="10" />
          <p>输入： {{ inputTrim }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model.number-input</p>
          <input v-model.number="inputNumber" :maxlength="10" />
          <p>输入： {{ inputNumber }}</p>
        </div>

        <div class="inline-block-demo">
          <p>基础v-model.lazy-input</p>
          <input v-model.lazy="inputLazy" :maxlength="10" />
          <p>输入： {{ inputLazy }}</p>
        </div>

        <div class="inline-block-demo">
          <p>组件v-model-输入反转</p>
          <model-component v-model="inputComponent"></model-component>
          <p>输入： {{ inputComponent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelComponent from "./model-component.vue";
// v-model有基于compositionstart 和 compositionend 监听输入法开始和结束 做触发change和双向绑定的处理
// 支持lazy number trim修饰符
// 双向绑定input radio checkbox select componemt等类型时的表现形式不一样， 在源码中也是做不同的处理
// 只有number绑定的为Number， 其他的为String或Array
export default {
  components: { modelComponent },
  data() {
    return {
      input1: "",
      radio1: "",
      checkbox1: "",
      mCheckbox: [], // 绑定 "" 就会认为三个checkbox是同一个
      selected1: "",
      mSelected: [], // 绑定 "" 会报warn 但功能正常
      inputTrim: "", // 使用trim() 删除字符串最后面的空格
      inputNumber: "", // 使用parseFloat() 如果不能转换则返回原始值，如果已经转成数字类型了，则后输入的非数字被自动删除
      inputLazy: "", // 不是实时更新，等blur后才更新
      inputComponent: "",
    };
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
    min-width: 240px;
    min-height: 200px;
    vertical-align: middle;
  }
}
</style>
