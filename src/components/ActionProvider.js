/* eslint-disable camelcase */
import React from 'react';
import Api from '../API/Api';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleQuery = async (query_string) => {
    const uuid = localStorage.getItem('uuid');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createChatBotMessage("I'll see what I can find", {
        withAvatar: true,
        delay: 100,
      })],
    }));
    const url = 'https://api.jugalbandi.ai/query-with-langchain-gpt4';
    const params = {
      uuid_number: uuid,
      query_string,
    };
    const response = await Api.get(url, params);
    const botMessage = createChatBotMessage(response.answer || response.detail, {
      withAvatar: true,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => React.cloneElement(child, {
        actions: {
          handleHello,
          handleQuery,
        },
      }))}
    </div>
  );
};

export default ActionProvider;
