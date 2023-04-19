import {
  Button, Input, Space, Typography,
} from 'antd';
import React from 'react';

const { Text } = Typography;
const UuidInput = ({
  uuid, onSetUuid, onRefresh, disabled,
}) => {
  const uuidNoChangeHandler = (e) => {
    onSetUuid(e.target.value);
  };

  return (
    <div>
      <Text>Uuid Number</Text>
      <Space.Compact style={{ width: '100%' }}>
        <Input placeholder="Enter Uuid Number" onChange={uuidNoChangeHandler} style={{ backgroundColor: '#E0E0FF' }} value={uuid} />
        <Button
          style={{
            backgroundColor: '#5E5BFF', color: 'white',
          }}
          onClick={onRefresh}
          disabled={disabled}
        >
          Clear
        </Button>
      </Space.Compact>
    </div>
  );
};

export default UuidInput;
