var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
  var template = $("#message-template").html();
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  });

  $('#messages').append(html);

});

socket.on('newLocationMessage', function (message) {
  var template = $("#location-message-template").html();
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    createdAt: formattedTime
  });

  $('#messages').append(html);
});


$('#message-form').on('submit', function (e) {
  e.preventDefault();

  var messageTextBox = $('[name=message]')

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, function () {
    messageTextBox.val('');
  });
});

var locationButton = $('#send-location');
locationButton.on('click', function (e) {
  if (!navigator.geolocation) {
    return alert ('Geolocation not supported by this browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location.');
  });
});
