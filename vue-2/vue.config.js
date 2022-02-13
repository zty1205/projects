module.exports = {
  devServer: {
    // webpack-dev-server 相关配置
    open: true, //配置自动启动浏览器
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false,
    hotOnly: false, // https:{type:Boolean}
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
