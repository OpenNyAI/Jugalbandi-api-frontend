import { Modal } from 'antd';
import React from 'react';

const PdfModal = ({ IsPdfModalOpen, handleCancel, pdfContent }) => (
  <Modal title="Basic Modal" open={IsPdfModalOpen} onCancel={handleCancel} footer={null}>
    <p>{pdfContent}</p>
  </Modal>
);

export default PdfModal;
