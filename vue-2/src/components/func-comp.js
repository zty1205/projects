export const demo1 = {
  functional: true,
  props: {
    title: { type: String, default: '' }
  },
  render(h, context) {
    const title = context.props.title;
    return h('div', {}, [h('div', { attrs: { class: 'func-title' } }, title), h('div', {}, '我是函数式组件')]);
  }
};
