function authFactory(scope) {
  return wx.authorize({
    scope
  }).then(res => {
    console.log(`${scope} res = `, res)
    return res
  }).catch(err => {
    console.log(`${scope} err = `, err)
    return Promise.reject(err)
  })
}


Page({
  onGetContact(e) {
    console.log('onGetContact e = ', e)
  },
  onShare(e) {
    console.log('onShare e = ', e)
  },
  onGetMobile(e) {
    console.log('onGetMobile e = ', e)
  },
  onGetUserInfo(e) {
    console.log('onGetUserInfo e = ', e)
  },
  onOpenApp(e) {
    // 需要从app进入小程序
    console.log('onOpenApp e = ', e)
  },
  onSetting(e) {
    console.log('onSetting e = ', e)
  },
  onFeedBack(e) {
    console.log('onFeedBack e = ', e)
  },
  onGetAvatar(e) {
    console.log('onGetAvatar e = ', e)
  },
  onGetLoc(e) {
    wx.authorize({
      scope: 'scope.userLocation',
    }).then(res => {
      console.log('userLocation res = ', res)
      wx.getLocation({
        altitude: 'altitude',
      }).then(result => {
        console.log('getLocation result = ', result)
      }).catch(error => {
        console.log('getLocation err = ', err)
      })
    }).catch(err => {
      console.log('userLocation err = ', err)
    })
  },
  onUserLocationBackground() {
    authFactory('scope.userLocationBackground')
  },
  onRecord() {
    authFactory('scope.record')
  },
  onCamera() {
    authFactory('scope.camera')
  },
  onBluetooth() {
    authFactory('scope.bluetooth')
  },
  onWritePhotosAlbum() {
    authFactory('scope.writePhotosAlbum')
  },
  onAddPhoneContact() {
    authFactory('scope.addPhoneContact')
  },
  onAddPhoneCalendar() {
    authFactory('scope.addPhoneCalendar')
  },
  onWerun() {
    authFactory('scope.werun')
  },
})