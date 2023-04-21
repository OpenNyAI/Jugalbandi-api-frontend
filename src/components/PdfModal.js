import { Modal } from 'antd';
import React from 'react';
import Pdf from './Pdf';

const PdfModal = ({ IsPdfModalOpen, handleCancel, pdfContent }) => (
  <Modal title="Basic Modal" open={IsPdfModalOpen} onCancel={handleCancel} footer={null}>
    <Pdf pdfContent={pdfContent} />
  </Modal>
);

export default PdfModal;
