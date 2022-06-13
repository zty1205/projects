Page({
  data: {
    forward: "/page/empty/index"
  },
  onLoad() {
    console.log('Page onLoad 监听页面加载')
  },
  onReady() {
    console.log('Page onReady 监听页面初次渲染完成')
  },
  onShow() {
    console.log('Page onShow 监听页面显示')
  },
  onHide() {
    console.log('Page onHide 监听页面隐藏')
  },
  onUnload() {
    console.log('Page onUnload 监听页面卸载')
  },
  onPullDownRefresh() {
    console.log('Page onPullDownRefresh 监听用户下拉动作')
  },
  onReachBottom() {
    console.log('Page onReachBottom 页面上拉触底事件的处理函数')
  },
  onShareAppMessage() {
    console.log('Page onShareAppMessage 用户点击右上角分享')
  }
})