Page({
  data: {
    message: '这是一个msg',
    array: [
      {
        message: 'one'
      },
      {
        message: 'two'
      },
      {
        message: 'three'
      }
    ],
    num: 1
  },
  onAdd() {
    this.setData({
      num: this.data.num + 1
    })
  }
})