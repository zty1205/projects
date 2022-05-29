const http = require('http');
const express = require('express'); //引入express
const socketIo = require('socket.io'); //引入socket.io
const path = require('path');

const app = new express();
const server = http.createServer(app);
const ws = new socketIo(server); //将socket.io 注入 express模块
app.use(express.static(__dirname + '/views')); // 托管vue打包后的静态文件

//设置允许跨域请求
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
  res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
  // res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/user/:id', function (req, res, next) {
  res.sendFile(__dirname + `/views/user${req.params.id || 1}.html`); // 不设 header为 json可以在局域网聊天 都是user1
});

server.listen(4000, () => {
  console.log(`WS started on http://localhost:4000`);
});

ws.on('connection', function (clientSocket) {
  // socket.io 使用 emit(eventName, data) 发送消息，使用on(eventName, callback)监听消息
  //监听客户端发送的 sendMsg 事件
  clientSocket.on('sendMsg', function (data) {
    // data 为客户端发送的消息，可以是 字符串，json对象或 buffer
    // 使用 emit 发送消息，broadcast 表示 除自己以外的所有已连接的socket客户端。
    clientSocket.broadcast.emit('receiveMsg', data);
  });
});
