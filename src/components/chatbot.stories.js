import React from 'react';
import Chatbot from './chatbot';

const onSetQuery = (query) => {
  // eslint-disable-next-line no-console
  console.log(query);
};

export default {
  component: Chatbot,
  onSetQuery,
};

export const Primary = () => <Chatbot onSetQuery={onSetQuery} />;
