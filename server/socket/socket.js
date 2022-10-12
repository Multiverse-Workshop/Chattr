const debug = require("debug")("socket");
const {
  generateDeliveredMessage,
  generateUserConnected,
  acknowledgment,
} = require("../utils/message");
const logging = require("../Logging/logging.json");

module.exports.socketIO = async (io) => {
  io.on("connection", (socket) => {
    let connection = generateUserConnected(socket.id);
    console.log(`CONNECTED:`, connection);
    logging.SOCKET_CONNECTION.push(connection);
    console.log(logging);

    try {
      socket.on("SEND_MESSAGE", (data, callback) => {
        logging.MESSAGE_SENT.push(data);
        console.log(`before delivered`, data);
        callback("ACKNOWLEDGE_MESSAGE_SENT");
        try {
          let messageDelivered = generateDeliveredMessage(
            data.user,
            data.message,
            data.date,
            data.sent
          );
          logging.MESSAGE_DElIVERED.push(messageDelivered);

          socket.emit("RECEIVE_MESSAGE", messageDelivered, (message) => {
            logging.ACKNOWLEDGE_MESSAGE_DELIVERED.push(acknowledgment(message))
            console.log(logging)
          });

        } catch (error) {
          socket.emit(error.message);
          logging.ERROR_MESSAGE_DElIVERED(error.message);
        }
      });
    } catch (error) {
      logging.ERROR_MESSAGE_SENT.push(error.message);
    }
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
