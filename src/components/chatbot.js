import React from 'react';
import { Input } from 'antd';
import './chatbot.css';

const chatbot = ({ onSetQuery }) => {
  const QueryChangeHandler = (e) => {
    onSetQuery(e.target.value);
  };

  return (
    <div className="chatbot-query">
      <Input style={{ width: '40%', display: 'flex' }} onChange={QueryChangeHandler} placeholder="Enter your question" />
    </div>
  );
};

export default chatbot;
