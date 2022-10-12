const debug = require('debug')('socket');
const { generateDeliveredMessage, generateUserConnected } = require('../utils/message');

module.exports.socketIO = async (io) => {
    io.on("connection", (socket) => {
        console.log(`CONNECTED:`, generateUserConnected(socket.id))

        socket.on("SEND_MESSAGE", data =>{
            console.log(`before delivered`, data)
            try{
                data.delivered = true;
                console.log(data)
                socket.emit('RECEIVE_MESSAGE', generateDeliveredMessage(data.user, data.message, data.date, data.sent, data.delivered))
            }
            catch(error){
                socket.emit(error.message)
            }
        })
    })
}