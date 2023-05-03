import {
  DislikeFilled, LikeFilled,
} from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';

const FeedbackButtons = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const onLiked = () => {
    setIsLiked(!isLiked);
  };
  const onDisLiked = () => {
    setIsDisliked(!isDisliked);
  };
  return (
    <div style={{ marginLeft: '10px' }}>
      {isLiked ? <Button type="text" shape="circle" icon={<LikeFilled style={{ color: '#5E5BFF' }} />} onClick={onLiked} disabled={isDisliked} />
        : <Button type="text" shape="circle" icon={<LikeFilled style={{ color: '#9D9CD4' }} />} onClick={onLiked} disabled={isDisliked} />}
      {isDisliked ? <Button type="text" shape="circle" icon={<DislikeFilled style={{ color: '#5E5BFF' }} />} onClick={onDisLiked} disabled={isLiked} />
        : <Button type="text" shape="circle" icon={<DislikeFilled style={{ color: '#9D9CD4' }} />} onClick={onDisLiked} disabled={isLiked} />}
    </div>
  );
};

export default FeedbackButtons;
