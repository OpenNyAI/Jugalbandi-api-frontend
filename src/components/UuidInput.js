import { Input } from 'antd';
import React from 'react';
import './UuidInput.css';

const UuidInput = ({ onSetUuid }) => {
  const uuidNoChangeHandler = (e) => {
    onSetUuid(e.target.value);
  };

  return (
    <div>
      <h5 className="UuidInput-title">Uuid Number</h5>
      <Input placeholder="Enter Uuid Number" onChange={uuidNoChangeHandler} />
    </div>
  );
};

export default UuidInput;
