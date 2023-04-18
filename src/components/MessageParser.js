import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const createUserMessage = (text) => createChatBotMessage({
    text,
    user: true,
    avatar: 'https://url-to-new-human-icon.png', // replace with the URL of the new human icon
  });

  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi')) {
      actions.handleHello();
    } else {
      actions.handleQuery('ac17dff6-ddc5-11ed-b956-8d5637583cf2', message);
    }
  };

  return (
    <div className="chat-message">
      {React.Children.map(children, (child) => React.cloneElement(child, {
        parse,
        createUserMessage,
        actions,
      }))}
    </div>
  );
};

export default MessageParser;
