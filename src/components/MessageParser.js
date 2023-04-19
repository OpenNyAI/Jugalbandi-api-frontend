/* eslint-disable no-console */
// import { createChatBotMessage } from 'react-chatbot-kit';
// import React from 'react';
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    if (lowercase.includes('hello') || lowercase.includes('hi')) {
      this.actionProvider.handleHello();
    } else {
      this.actionProvider.handleQuery('ac17dff6-ddc5-11ed-b956-8d5637583cf2', lowercase);
    }
  }
}

// const MessageParser = ({ children, actions }) => {
//   const createUserMessage = (text) => createChatBotMessage({
//     text,
//     user: true,
//     avatar: '',
//   });

//   const parse = (message) => {
//     if (message.includes('hello') || message.includes('hi')) {
//       actions.handleHello();
//     } else {
//       actions.handleQuery('ac17dff6-ddc5-11ed-b956-8d5637583cf2', message);
//     }
//   };

//   return (
//     <div className="chat-message">
//       {React.Children.map(children, (child) => React.cloneElement(child, {
//         parse,
//         createUserMessage,
//         actions,
//       }))}
//     </div>
//   );
// };

export default MessageParser;
