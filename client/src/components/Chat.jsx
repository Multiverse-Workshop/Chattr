import React from "react";
import ChatHeader from "./ChatHeader";

function Chat({loggedin}) {
  return (
    <div className="chat">
      <ChatHeader loggedin={loggedin}/>
      <div className="artboard artboard-horizontal phone-2 chat-area"></div>
      <div className="type-message">
        <div className="message-input-container bg-base-100 p-1">
        <input
          type="text"
          placeholder="Type your message here"
          className="input bg-zinc-100 w-full max-w-xxl message-input"
        />
        <button className="btn btn-outline btn-secondary">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
