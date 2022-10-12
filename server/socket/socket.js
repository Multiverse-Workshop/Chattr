const debug = require('debug')('socket');
const { generateDeliveredMessage, generateUserConnected } = require('../utils/message');
const logging = require ('../Logging/logging.json');

module.exports.socketIO = async (io) => {
    io.on("connection", (socket) => {
        let connection = generateUserConnected(socket.id);
        console.log(`CONNECTED:`, connection)
        logging.SOCKET_CONNECTION.push(connection);
        console.log(logging);

        socket.on("SEND_MESSAGE", data => {
            logging.MESSAGE_SENT.push(data);
            console.log(`before delivered`, data)
            try{
                console.log(data)
                let messageDelivered = generateDeliveredMessage(data.user, data.message, data.date, data.sent)
                logging.MESSAGE_DElIVERED.push(messageDelivered);
                socket.emit('RECEIVE_MESSAGE',messageDelivered)
                console.log(logging);
            }
            catch(error){
                socket.emit(error.message)
                logging.ERROR_MESSAGE_DElIVERED(error.message)
            }
        })
    })
}