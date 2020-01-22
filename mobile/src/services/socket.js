import socketio from 'socket.io-client';

const socket = socketio('http://192.168.1.8:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFuntion) {
    socket.on('new-dev', subscribeFuntion);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }

    socket.connect();
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
}