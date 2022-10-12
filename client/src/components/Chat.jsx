import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

function Chat({ loggedin, socket }) {
  const [message, setMessage] = useState({});
  const [user, setUser] = useState("Voldemort");
  const [receivedMessage, setReceivedMessage] = useState([]);
  //const [response, setResponse] = useState('');

  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log(time);

  const send = () => {
    console.log(message);
    console.log(receivedMessage);
    try {
      //setResponse('sent')
      socket.emit(
        "SEND_MESSAGE",
        {
          message,
          user,
          sentTime: time,
          date,
          sent: true,
        },
        (message) => {
          console.log(message);
        }
      );
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    socket.on("RECEIVE_MESSAGE", (data, callback) => {
      console.log(data);
      setReceivedMessage((prev) => [...prev, data]);
      callback();
    });
  }, [socket]);

  return (
    <div className="chat">
      <div className="chat-header">
        <ChatHeader loggedin={loggedin} />
      </div>
      <div className="chat-area overflow-y-scroll">
        <div className="">
          <ChatMessages socket={socket} receivedMessage={receivedMessage} />
        </div>
      </div>
      <div className="type-message">
        <div className="message-input-container bg-base-100 p-1">
          <input
            type="text"
            placeholder="Type your message here"
            className="input bg-zinc-100 w-full max-w-xxl message-input"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button className="btn btn-outline btn-secondary" onClick={send}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
