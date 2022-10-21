import React from 'react'

function ChatMessages({ receivedMessage }) {

  return (
    <>
    {receivedMessage.map((message, index) => {
        return(
            <div className='message-container' key={index}>
                <p className='message-user'><strong>{message.user}</strong> <em>{message.deliveredAt}</em></p>
                <p className='message-text'>{message.message}</p>
            </div>
        );
        })}
    </>
  )
}

export default ChatMessages