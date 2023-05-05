/* eslint-disable no-unused-vars */
import {
  DislikeFilled, LikeFilled,
} from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import Api from '../API/Api';

const sendFeedbackResponse = async (feedback) => {
  const url = 'https://api.jugalbandi.ai/response-feedback';
  const response = await Api.post(url, {
    uuid_number: '',
    query: '',
    response: '',
    feedback,
  });
};
const FeedbackButtons = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(true);
  const onLiked = async () => {
    setIsLiked(!isLiked);
    if (!isLiked) { sendFeedbackResponse(!isLiked); }
  };
  const onDisLiked = () => {
    setIsDisliked(!isDisliked);
    if (isDisliked) {
      sendFeedbackResponse(!isDisliked);
    }
  };
  return (
    <div style={{ marginLeft: '20px' }}>
      {isLiked ? <Button type="text" shape="circle" icon={<LikeFilled style={{ color: '#5E5BFF' }} />} onClick={onLiked} disabled={!isDisliked} />
        : <Button type="text" shape="circle" icon={<LikeFilled style={{ color: '#9D9CD4' }} />} onClick={onLiked} disabled={!isDisliked} />}
      {!isDisliked ? <Button type="text" shape="circle" icon={<DislikeFilled style={{ color: '#5E5BFF' }} />} onClick={onDisLiked} disabled={isLiked} />
        : <Button type="text" shape="circle" icon={<DislikeFilled style={{ color: '#9D9CD4' }} />} onClick={onDisLiked} disabled={isLiked} />}
    </div>
  );
};

export default FeedbackButtons;
