import { Modal } from 'antd';
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from './Pdf';

const PdfModal = ({ IsPdfModalOpen, handleCancel, pdfContent }) => (
  <Modal title="Basic Modal" open={IsPdfModalOpen} onCancel={handleCancel} footer={null}>
    <PDFViewer width="100%" height="1000px">
      <Pdf pdfContent={pdfContent} />
    </PDFViewer>
  </Modal>
);

export default PdfModal;
