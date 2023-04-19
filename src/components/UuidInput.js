import { Input, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
const UuidInput = ({ onSetUuid }) => {
  const uuidNoChangeHandler = (e) => {
    onSetUuid(e.target.value);
  };

  return (
    <div>
      <Text>Uuid Number</Text>
      <Input placeholder="Enter Uuid Number" onChange={uuidNoChangeHandler} style={{ backgroundColor: '#E0E0FF' }} />
    </div>
  );
};

export default UuidInput;
