var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('new message', message);
});

socket.emit('createMessage', {
  from: "Charlie",
  text: "Bark"
}, function (data) {
  console.log('Got it', data);
});
