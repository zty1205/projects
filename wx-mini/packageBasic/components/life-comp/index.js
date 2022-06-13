Component({
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
    created: function () {
      console.log('Compnent created 组件实例刚刚被创建')
    },
    attached: function () {
      console.log('Compnent attached 组件实例进入页面节点树')
    },
    ready: function () {
      console.log('Compnent ready 组件在视图层布局完成')
    },
    moved: function () {
      console.log('Compnent moved 组件实例被移动到节点树另一个位置')
    },
    detached: function () {
      console.log('Compnent detached 组件实例被从页面节点树移除')
    },
    error: function () {
      console.log('Compnent error 每当组件方法抛出错误时执行')
    },
  },

  attached: function () {}, // 此处 attached 的声明会被 lifetimes 字段中的声明覆盖, <2.2.3版本的

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      console.log('pageLifetimes show 组件所在的页面被展示')
    },
    hide: function () {
      console.log('pageLifetimes hide 组件所在的页面被隐藏')
    },
    resize: function () {
      console.log('pageLifetimes resize 组件所在的页面尺寸变化')
    },
  },
})

/*
1. App onLaunch 监听小程序初始化
2. App onShow 监听小程序启动或切前台
3. Compnent created 组件实例刚刚被创建
4. Compnent attached 组件实例进入页面节点树
5. Page onLoad 监听页面加载
6. pageLifetimes show 组件所在的页面被展示
7. Page onShow 监听页面显示
8. Compnent ready 组件在视图层布局完成
9. Page onReady 监听页面初次渲染完成

- 切换后台，再切回来

10. pageLifetimes hide 组件所在的页面被隐藏
11. Page onHide 监听页面隐藏
12. App onHide 监听小程序切后台
13. App onShow 监听小程序启动或切前台
14. pageLifetimes show 组件所在的页面被展示
15. Page onShow 监听页面显示

- 路由跳转

10. pageLifetimes hide 组件所在的页面被隐藏
11. Page onHide 监听页面隐藏

- 从路由栈销毁（switchTo, back 等）

10. Page onUnload 监听页面卸载
11. Compnent detached 组件实例被从页面节点树移除
*/
