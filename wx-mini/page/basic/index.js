// page/basic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'wxml',
        title: 'WXML语法',
        url: '/packageBasic/page/wxml/index'
      },
      {
        id: 'wxs',
        title: 'WXS语法',
        url: '/packageBasic/page/wxs/index'
      },
      {
        id: 'event',
        title: '事件系统',
        url: '/packageBasic/page/event/index'
      },
      {
        id: 'lifestyle',
        title: '生命周期',
        url: '/packageBasic/page/lifestyle/index'
      },
      {
        id: 'auth',
        title: '授权',
        url: '/packageBasic/page/auth/index'
      }
    ]
  },
  onTap(e) {
    const index = e.currentTarget.dataset.index
    const item = this.data.list[index]
    wx.navigateTo({
      url: item.url,
    })
  }
})