const dynamicModuleConfig = {
  moduleName: "",
  dynamicVuex: "dynamicVuex",
  pathResolver: function (name) {
    return `./module/${name}.store.js`;
  },
};
export function dynamicModuleCreator(config = dynamicModuleConfig) {
  console.log("dynamicModuleCreator");
  return {
    install: function (Vue) {
      console.log("install");
      Vue.mixin({
        beforeCreate: function () {
          if (this.$options[config.dynamicVuex]) {
            let name = config.moduleName || this.$options.name;
            console.log("name = ", name);
            import(`./module/${name}.store.js`).then((module) => {
              // or require.ensure
              console.log("then module = ", module);
              this.$store.registerModule(name, module.default);
            });
          }
        },
      });
    },
    uninstall: function () {},
  };
}

export const dynamicModule = {
  install: function (Vue) {
    console.log("install");
    Vue.mixin({
      beforeCreate: function () {
        if (this.$options.dynamicVuex) {
          import("./module/simple.store.js").then((module) => {
            // or require.ensure
            console.log("then module = ", module);
            this.$store.registerModule("dyModule", module.default);
          });
        }
      },
    });
  },
  uninstall: function () {},
};
