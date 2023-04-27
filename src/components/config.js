import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import FeedbackButtons from './Widget';

const config = {
  botName: 'Jugalbandi',
  initialMessages: [createChatBotMessage('Hello, ask me a question')],
  BOT_AVATAR_PATH: '',
  widgets: [
    {
      widgetName: 'FeedbackButtons',
      widgetFunc: () => <FeedbackButtons />,
    },
  ],
};

export default config;
