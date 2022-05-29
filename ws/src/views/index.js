function setUser(user) {
  document.title = user.name;
  document.getElementById('name').innerText = `我是${user.name}`;
}

function appendMsg(data) {
  const { user: u, msg } = data;
  const div = document.createElement('div');
  if (u.id === user.id) {
    div.className = 'msg-self';
    div.innerText = `${u.name} ${msg}`;
  } else {
    div.className = 'msg-else';
    div.innerText = `${msg} ${u.name}`;
  }
  document.getElementById('content').appendChild(div);
}

function connect(user) {
  const socket = io.connect(); //连接服务端，因为本机使用localhost 所以connect(url)中url可以不填或写 http://localhost
  // 监听 receiveMsg 事件，用来接收其他客户端推送的消息
  socket.on('receiveMsg', function (data) {
    appendMsg(data);
  });

  const sendMsg = document.getElementById('sendMsg');

  document.getElementById('btn_send').addEventListener('click', function () {
    let data = { user, msg: sendMsg.value };
    //给服务端发送 sendMsg事件名的消息
    socket.emit('sendMsg', data);
    appendMsg(data);
    sendMsg.value = '';
  });
}

function main(user) {
  setUser(user);
  connect(user);
}
