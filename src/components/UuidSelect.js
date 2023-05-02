import {
  ConfigProvider,
  Select, Space, Typography,
} from 'antd';
import React from 'react';

const { Text } = Typography;
const UuidSelect = ({
  uuid, onSetUuid, uuidOptions, onRefresh,
}) => {
  const uuidNoChangeHandler = (value) => {
    if (onSetUuid) {
      onSetUuid(value);
    }
  };

  return (
    <div>
      <Text>Uuid Number</Text>
      <Space style={{ width: '100%' }} direction="vertical">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#E0E0FF',
              colorBgContainer: '#E0E0FF',
            },
          }}
        >
          <Select
            size="large"
            showSearch
            allowClear
            placeholder="Enter The Name of The Document You Want to Query"
            optionFilterProp="children"
            onChange={uuidNoChangeHandler}
            style={{ width: '100%' }}
            value={uuid}
            onClear={onRefresh}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={uuidOptions}
          />
        </ConfigProvider>
      </Space>
    </div>
  );
};

export default UuidSelect;
