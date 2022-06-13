// page/basic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'lifestyle',
        title: '生命周期',
        url: '/packageBasic/page/lifestyle/index'
      }
    ]
  },
  onTap(e) {
    console.log('e = ', e)
    const index = e.currentTarget.dataset.index
    console.log('index = ', index)
    const item = this.data.list[index]
    wx.navigateTo({
      url: item.url,
    })
  }
})