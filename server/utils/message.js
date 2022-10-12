let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


let generateDeliveredMessage = (id, user, message, date, sent) => {
    return {
        id,
        user,
        message,
        date,
        sent,
        delivered: true,
        deliveredAt: time
    }
};
let generateSentMessage = (id, user, message, date, sent) => {
    return {
        id,
        user,
        message,
        date,
        sent,
        sentAt: time
    }
};

let generateUserConnectionStatus = (id) => {
    return {
        id,
        timeConnected: time,
        dateConnected: date
    }
}

let acknowledgment = (ack,id, user, message) => {
    return {
        ack,
        id,
        user,
        message,
        acknowledgmentTime: time,
        acknowledgmentDate: date
    }
}

module.exports = {generateDeliveredMessage, generateSentMessage, generateUserConnectionStatus, acknowledgment}