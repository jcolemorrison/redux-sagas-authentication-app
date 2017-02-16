import React, { PropTypes } from 'react'

// Iterate over each message object and print them
// in an unordered list
const Messages = (props) => {
  const { messages } = props
  return (
    <div>
      <ul>
        {messages.map(message => (
          <li key={message.time}>{message.body}</li>
        ))}
      </ul>
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        time: PropTypes.date,
      })),
}

export default Messages
