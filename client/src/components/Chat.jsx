import React from "react";
import ChatHeader from "./ChatHeader";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="artboard artboard-horizontal phone-2 chat-area"></div>
      <div className="type-message">
        <div className="message-input-container">
        <input
          type="text"
          placeholder="Type your message here"
          className="input input-bordered w-full max-w-xxl message-input"
        />
        <button className="btn btn-outline btn-secondary">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
