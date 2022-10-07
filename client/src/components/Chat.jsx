import React, {useState, useEffect} from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

function Chat({ loggedin, socket }) {

  const [message, setMessage] = useState({});
  const [user, setUser] = useState('Voldemort');
  const [receivedMessage, setReceivedMessage]= useState([]);

  const send = () => {
    console.log(message);
    console.log(receivedMessage)
    socket.emit("SEND_MESSAGE", {message, user})
  }
  
    useEffect(() => {
      socket.on('RECEIVE_MESSAGE', (data) => {
        setReceivedMessage(prev => [...prev, data]);
      })
    },[socket])

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
            onChange={(e) => {setMessage(e.target.value)}}
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
