import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/common.scss";
import { dynamicModuleCreator } from "@/store/plugin";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;
// try ctach 主 然后function.call
Vue.config.errorHandler = (err, vm, info) => {
  console.log("err = ", err);
  console.log("vm = ", vm);
  console.log("info = ", info);
};

Vue.use(dynamicModuleCreator());

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
