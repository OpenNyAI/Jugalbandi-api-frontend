/* eslint-disable camelcase */
import React, { useContext } from 'react';
import Api from '../API/Api';
import { CustomContext } from '../CustomContext';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { updateData, onLoading } = useContext(CustomContext);
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleQuery = async (query_string) => {
    onLoading(true);
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
    if (response.source_text) {
      updateData((Object.values(response.source_text))[0]);
    } else {
      updateData([]);
    }
    let botMessage;
    if (response.answer) {
      botMessage = createChatBotMessage(response.answer, {
        withAvatar: true,
      });
    } else {
      botMessage = createChatBotMessage(response.detail, {
        withAvatar: true,
      });
    }
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
