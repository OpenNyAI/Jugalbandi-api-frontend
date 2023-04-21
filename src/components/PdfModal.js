import { Modal } from 'antd';
import React from 'react';

const PdfModal = ({ IsPdfModalOpen, handleCancel }) => (
  <Modal title="Basic Modal" open={IsPdfModalOpen} onCancel={handleCancel} footer={null}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

export default PdfModal;
