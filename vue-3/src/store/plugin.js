const myPlugin = (store) => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log('plugin mutation = ', mutation);
    console.log('plugin state = ', state);
  });
  // store.commit 可以 提交 mutation
};

export default myPlugin;
