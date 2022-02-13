import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    getCount(state) {
      return `count: ${state.count}`;
    },
  },
  mutations: {
    addCount(state) {
      state.count += 1;
    },
    reduceCount(state) {
      state.count -= 1;
    },
    addSome(state, num) {
      state.count += num;
    },
  },
  actions: {
    add(context) {
      context.commit("addCount");
    },
    del(context) {
      context.commit("reduceCount");
    },
    addSome(context, num) {
      context.commit("addSome", num);
    },
  },
});
