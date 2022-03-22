<template>
  <div>
    <div class="content">
      <div class="count-box">
        <div>{{ count }}</div>
        <button class="count-btn" @click="addCount">增加</button>
      </div>
      <div class="item" v-for="item in LIST" :key="item.title">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, computed, watch, watchEffect } from 'vue';

const LIST = [
  {
    title: 'ref()',
    desc: '定义响应式的基础类型变量'
  },
  {
    title: 'readonly()',
    desc: '定义响应式的只读变量'
  },
  {
    title: 'reactive()',
    desc: '返回对象的响应式副本'
  },
  {
    title: 'toRef',
    desc: '为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。'
  },
  {
    title: 'toRefs',
    desc: '将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref'
  },
  {
    title: 'computed(Function | Object)',
    desc: '计算属性，用法基本不变，改成函数式调用'
  },
  {
    title: 'watch(property, Function, config)',
    desc: 'watch，用法基本不变，改成函数式调用'
  },
  {
    title: 'watchEffect(Function, config)',
    desc: '立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。 类似react的useEffect'
  }
];

const Person = {
  age: 11,
  name: 'zty'
};

const Foo = {
  name: 'zoo',
  key: 'foo'
};

export default {
  props: {},
  setup(props, content) {
    console.log('setup props = ', props);
    console.log('setup content = ', content);

    // ref定义响应式的基础变量
    const count = ref(0);
    count.value++;
    console.log('ref count = ', count);

    // 返回对象的响应式副本
    const person = reactive(Person);
    const foo = reactive(Foo);
    const reactiveObj = reactive({ ...Person });
    console.log('reactiveObj = ', reactiveObj);

    // 为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
    const ageRef = toRef(person, 'age');
    ageRef.value++;
    console.log('toRef person.age = ', person.age);

    // 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref
    const fooRefs = toRefs(foo);

    fooRefs.name += '--hh';
    console.log('fooRefs person.age = ', foo.name);

    // 计算属性
    const plusOne = computed(() => {
      console.log('computed count.value');
      return count.value + 1;
    });

    // 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。 类似react的useEffect
    watchEffect(() => console.log('watchEffect count.value = ', count.value));

    function addCount() {
      count.value++;
    }

    // 还有一些判断的 isProxy， isReactive， isReadonly等等
    // 具体见 https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive

    return {
      count,
      LIST,
      plusOne,
      addCount
    };
  }
};
</script>

<style lang="less" scoped>
.count-box {
  display: flex;
  margin: 10px;
  align-items: center;
  .count {
    font-size: 16px;
    margin-right: 10px;
  }
  .count-btn {
    color: #fff;
    width: 200px;
    text-align: center;
    padding: 6px 12px;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
    border-radius: 2em;
    margin: 0 12px;
  }
}
.item {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 6px 8px;
  margin-top: 1em;
  margin-bottom: 10px;
  .desc {
    color: #ccc;
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
