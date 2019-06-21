import React from 'react';

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{props.message.author}</span>
        <small>{time}</small>
      </i>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
