const dayjs = require("dayjs");

let generateDeliveredMessage = (id, user, message, sent) => {
  return {
    id,
    user,
    message,
    date: dayjs().format("YYYY-MM-DD"),
    sent,
    delivered: true,
    deliveredAt: dayjs().format("HH:mm"),
  };
};
let generateSentMessage = (id, user, message, date, sent) => {
  return {
    id,
    user,
    message,
    date: dayjs().format("YYYY-MM-DD"),
    sent,
    sentAt: dayjs().format("HH:mm"),
  };
};

let generateUserConnectionStatus = (id) => {
  return {
    id,
    timeConnected: dayjs().format("HH:mm:ss"),
    dateConnected: dayjs().format("YYYY-MM-DD"),
  };
};

let acknowledgment = (id, user, message) => {
  return {
    id,
    user,
    message,
    acknowledgmentTime: dayjs().format("HH:mm:ss"),
    acknowledgmentDate: dayjs().format("YYYY-MM-DD"),
  };
};

module.exports = {
  generateDeliveredMessage,
  generateSentMessage,
  generateUserConnectionStatus,
  acknowledgment,
};
