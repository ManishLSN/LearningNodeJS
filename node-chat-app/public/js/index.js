var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: 'Harpreet',
        text: 'Hello how are you?'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});