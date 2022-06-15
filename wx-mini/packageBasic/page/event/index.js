Page({
  onBasicClick(e) {
    console.log(
      'e = ', e
    )
    wx.showToast({
      title: '点击!',
    })
  },
  onBasicLong() {
    wx.showToast({
      title: '长按!',
    })
  },
  onAugClick(e) {
    let {
      currentTarget: {
        dataset: {
          msg
        }
      },
      mark: {
        m1
      }
    } = e
    wx.showModal({
      content: `data-msg=${msg}; mark:m1=${m1}`
    })
  },
  handleMPOuter(e) {
    console.log('-- outer -- ', e)
  },
  handleMPMiddle() {
    console.log('-- middle -- ')
  },
  handleMPInner() {
    console.log('-- inner -- ')
  },
  handleBHTOuter() {
    console.log('-- outer tap-- ')
  },
  handleBHTOuterCap() {
    console.log('-- outer 捕获 -- ')
  },
  handleBHTInner() {
    console.log('-- inner -- ')
  },
  handleBHTInnerCap() {
    console.log('-- inner 捕获 -- ')
  }
})