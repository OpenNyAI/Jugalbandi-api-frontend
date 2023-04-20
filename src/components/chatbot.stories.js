import React from 'react';
import Chatbot from './chatbot';

export default {
  component: Chatbot,
};

export const Primary = () => <Chatbot onSetQuery={() => {}} />;
