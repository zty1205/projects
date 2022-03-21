export default {
  install: (app, options) => {
    const { tag = 'div' } = options;
    app.component('plu-demo-comp', {
      // template: `<${tag}>name: {{name}}</${tag}>`,
      name: 'plu-demo-comp',
      props: {
        name: String
      },
      render: function (h) {
        return h(tag, null, this.name);
      }
    });
  }
};
