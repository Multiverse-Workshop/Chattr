import React from "react";
import Chat from "./Chat";

const users = ["John Doe", "Travis Barker", "Kate Rose", "Robert Parker"];
function MessageSideBar({ socket }) {
  return (
    <>
      <div className="drawer-side message-side-bar bg-base-100">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 overflow-y-auto w-75 bg-base-100 text-base-content">
          <h1 className="font-bold text-lg text-center">Messages</h1>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
          {users.map((user, index) => {
            return (
              <a key={index}>
                <div className="messages">
                  <div className="avatar-div">
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                  </div>
                  <div className="message-info-div">
                    <h1>{user}</h1>
                    <p>Hello</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Chat socket={socket} />
    </>
  );
}

export default MessageSideBar;
