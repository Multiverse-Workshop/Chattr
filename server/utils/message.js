let today = new Date();
let time = today.getHours() + ":" + today.getMinutes();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


let generateDeliveredMessage = (user, message, date, sent, delivered) => {
    return {
        user,
        message,
        date,
        sent,
        delivered,
        deliveredAt: time
    }
};

let generateUserConnected = (id, timeConnected, dateConnected) => {
    return {
        id,
        timeConnected: time,
        dateConnected: date
    }
}

module.exports = {generateDeliveredMessage, generateUserConnected}