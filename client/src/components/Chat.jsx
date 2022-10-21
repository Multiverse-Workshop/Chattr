import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { saveMessage } from '../features/messageHistorySlice';
import { getSavedMessages } from "../features/messageHistorySlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

function Chat({ socket }) {

  const dispatch = useDispatch();
  const messageHistory = useSelector((store) => store.messageHistory)

  const userInfo = useSelector((store) => store.user);
  let user = userInfo.user.username;

  const [message, setMessage] = useState({});
  const [receivedMessage, setReceivedMessage] = useState([]);
  const [logger, setLogger] = useState([]);

  const send = () => {
    try {
      socket.emit(
        "SEND_MESSAGE",
        {
          message,
          user,
          sentTime: dayjs().format("HH:mm:ss"),
          date: dayjs().format("YYYY-MM-DD"),
          sent: true,
          room: '100'
        },
        (ack) => {
          let acknowledgment = {
            ack,
            message,
            user,
            acknowledgmentTime: dayjs().format("HH:mm:ss"),
            acknowledgmentDate: dayjs().format("YYYY-MM-DD")
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
    setReceivedMessage((prev) => [...prev, ...messageHistory.message]);
  },[])

  useEffect(() => {
    dispatch(getSavedMessages());
  },[receivedMessage])

  useEffect(() => {
    socket.on("RECEIVE_MESSAGE", (data, callback) => {
      callback('ACKNOWLEDGMENT_MESSAGE_DELIVERED')
      setReceivedMessage((prev) => [...prev, data]);
      dispatch(saveMessage(data));
    });
  }, [socket]);


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
