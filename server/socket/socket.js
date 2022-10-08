const debug = require('debug')('socket');

module.exports.socketIO = async (io) => {
    io.on("connection", (socket) => {
        console.log(`CONNECTED: ${socket.id}`)

        socket.on("SEND_MESSAGE", (data) =>{
            console.log(data)
            socket.emit('RECEIVE_MESSAGE', data)
        })
    })
}