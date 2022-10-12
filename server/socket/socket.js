const debug = require("debug")("socket");
const {
  generateDeliveredMessage,
  generateSentMessage,
  generateUserConnectionStatus,
  acknowledgment,
} = require("../utils/message");
const logging = require("../Logging/logging.json");

module.exports.socketIO = async (io) => {
  io.on("connection", (socket) => {
    logging.SOCKET_CONNECTION.push(generateUserConnectionStatus(socket.id));
    console.log(logging.SOCKET_CONNECTION);

    try {
      socket.on("SEND_MESSAGE", (data, callback) => {
        logging.MESSAGE_SENT.push(generateSentMessage(socket.id,
            data.user,
            data.message,
            data.date,
            data.sent));

        callback("ACKNOWLEDGE_MESSAGE_SENT");
        try {
          let messageDelivered = generateDeliveredMessage(
            socket.id,
            data.user,
            data.message,
            data.date,
            data.sent
          );
          logging.MESSAGE_DElIVERED.push(messageDelivered);

          socket.emit("RECEIVE_MESSAGE", messageDelivered, (message) => {
            logging.ACKNOWLEDGE_MESSAGE_DELIVERED.push(
              acknowledgment(message, socket.id, data.user, data.message)
            );
            console.log(logging);
          });
        } catch (error) {
          socket.emit(error.message);
          logging.ERROR_MESSAGE_DElIVERED(error.message);
        }
      });
    } catch (error) {
      logging.ERROR_MESSAGE_SENT.push(error.message);
      console.log(logging.ERROR_MESSAGE_SENT);
    }
    socket.on("disconnect", () => {
      logging.SOCKET_DISCONNECTION.push(
        generateUserConnectionStatus(socket.id)
      );
      console.log(logging.SOCKET_DISCONNECTION);
    });
  });
};
