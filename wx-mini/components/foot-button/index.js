const computedBehavior = require('miniprogram-computed').behavior

const tab = [
  "/page/basic/index",
  "/page/component/index",
  "/page/API/index",
  "/page/cloud/index"
]

Component({
  behaviors: [computedBehavior],
  properties: {
    width: {
      type: String,
      value: '100vw'
    },
    tab: {
      value: '0',
      type: String
    },
    forward: {
      value: false,
      optionalTypes: [Boolean, String]
    }
  },
  computed: {
    btnClass(data) {
      // 注意： computed 函数中不能访问 this ，只有 data 对象可供访问
      // 这个函数的返回值会被设置到 this.data.sum 字段中
      return data.forward ? 'footer-button--3' : 'footer-button--2'
    },
    footClass(data) {
      return data.forward ? 'footer--3' : 'footer--2'
    },
  },
  methods: {
    onBack() {
      wx.navigateBack({
        delta: 1,
      })
    },
    onTabbar() {
      wx.switchTab({
        url: tab[this.data.tab],
      })
    },
    onForward() {
      wx.navigateTo({
        url: this.data.forward,
      })
    },
  }
})
