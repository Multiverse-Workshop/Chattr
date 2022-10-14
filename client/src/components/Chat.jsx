import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { saveMessage } from '../features/messageHistorySlice';
import { getSavedMessages } from "../features/messageHistorySlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Chat({ socket }) {

  const dispatch = useDispatch();
  const messageHistory = useSelector((store) => store.messageHistory)

  const userInfo = useSelector((store) => store.user);
  let user = userInfo.user.username;

  const [message, setMessage] = useState({});
  const [receivedMessage, setReceivedMessage] = useState([]);
  const [logger, setLogger] = useState([]);

  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const send = () => {
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
          room: '100'
        },
        (ack) => {
          let acknowledgment = {
            ack,
            message,
            user,
            acknowledgmentTime: time,
            acknowledgmentDate: date
          }
          setLogger((prev) => [...prev, acknowledgment])
        }
      );
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  let room = '100'

  const joinRoom = () => {
    if(room !== ''){
      try{
        socket.emit('JOIN_ROOM', room)
      }catch(e){
        console.log(e)
      }
      
    }
  }

  useEffect(() => {
    joinRoom();
    setReceivedMessage((prev) => [...prev, ...messageHistory]);
  },[])

  useEffect(() => {
    dispatch(getSavedMessages());
  },[receivedMessage])

  useEffect(() => {
    socket.on("RECEIVE_MESSAGE", (data, callback) => {
      callback('ACKNOWLEDGMENT_MESSAGE_DELIVERED')
      console.log(data);
      setReceivedMessage((prev) => [...prev, data]);
      dispatch(saveMessage(data));
    });
  }, [socket]);

  console.log(logger);

  return (
    <div className="chat">
      <div className="chat-header">
        <ChatHeader />
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
