import { createStore } from 'vuex';

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    SET_COUNT(state, payload) {
      state.count += payload;
    }
  },
  actions: {
    async setCount({ commit }, payload) {
      let fn = (base) => {
        return new Promise((resolve) => {
          let num = Math.floor(Math.random() * base);
          resolve(num);
        });
      };
      let n = await fn(payload || 10);
      commit('SET_COUNT', n);
    }
  },
  getters: {
    getCount: (state) => `来自store中的getter: ${state.count}`
  }
});

export default store;
