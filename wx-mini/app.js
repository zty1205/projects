// app.js
App({
  onLaunch() {
    console.log('App onLaunch 监听小程序初始化')
  },
  onShow() {
    console.log('App onShow 监听小程序启动或切前台')
  },
  onHide() {
    console.log('App onHide 监听小程序切后台')
  },
  onError() {
    console.log('onError 错误监听函数')
  },
  onPageNotFound() {
    console.log('onPageNotFound 页面不存在监听函数')
  },
  onUnhandledRejection() {
    console.log('onUnhandledRejection 未处理的 Promise 拒绝事件监听函数')
  },
  onThemeChange() {
    console.log('onThemeChange 监听系统主题变化')
  },
  globalData: {
    userInfo: null
  }
})
