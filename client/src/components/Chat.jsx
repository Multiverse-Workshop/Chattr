import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

function Chat({ loggedin }) {
  return (
    <div className="chat">
      <div className="chat-header">
        <ChatHeader loggedin={loggedin} />
      </div>
      <div className="chat-area overflow-y-scroll">
        <div className="">
          <ChatMessages />
        </div>
      </div>
      <div className="type-message">
        <div className="message-input-container bg-base-100 p-1">
          <input
            type="text"
            placeholder="Type your message here"
            className="input bg-zinc-100 w-full max-w-xxl message-input"
          />
          <button className="btn btn-outline btn-secondary">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
