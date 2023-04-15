import React from 'react';
import UuidInput from './UuidInput';

const onSetUuid = (number) => {
  // eslint-disable-next-line no-console
  console.log(number);
};

export default {
  component: UuidInput,
  onSetUuid,
};

export const Primary = () => <UuidInput onSetUuid={onSetUuid} />;
