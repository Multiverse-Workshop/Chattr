import React from 'react'

function ChatMessages() {
    const messages = [
        {user: 'Travis Barker', message: 'Hello'},
        {user: 'Travis Barker', message: 'Hi'},
        {user: 'Travis Barker', message: 'What up'},
        {user: 'Travis Barker', message: 'Nothing'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},
        {user: 'Travis Barker', message: 'Cool'},

    ]
  return (
    <>
    {messages.map((message, index) => {
        return(
            <div className='message-container' key={index}>
                <p className='message-user'><strong>{message.user}</strong></p>
                <p className='message-text'>{message.message}</p>
            </div>
        );
        })}
    </>
  )
}

export default ChatMessages