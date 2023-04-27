import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const FeedbackButtons = () => (
  <div style={{ marginLeft: '10px' }}>
    <Button type="text" shape="circle" icon={<LikeOutlined />} />
    <Button type="text" shape="circle" icon={<DislikeOutlined />} />
  </div>
);

export default FeedbackButtons;
