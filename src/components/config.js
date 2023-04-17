import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'Priya',
  initialMessages: [createChatBotMessage('Hello ask me a question')],
  BOT_AVATAR_PATH: '../public/logo512.png',
};

export default config;
