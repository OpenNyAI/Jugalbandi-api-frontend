import { Button, Card } from 'antd';
import React, { useState } from 'react';
import PdfModal from './PdfModal';

const CardPdf = ({ content, pdfContent }) => {
  const [IsPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const showModal = () => {
    setIsPdfModalOpen(true);
  };
  const handleCancel = () => {
    setIsPdfModalOpen(false);
  };
  return (
    <>
      <Card
        style={{
          width: '100%',
          borderColor: 'black',
          marginBottom: '5%',
        }}
      >
        <p>{content}</p>
        <Button
          style={{
            backgroundColor: '#5E5BFF', color: 'white',
          }}
          size="large"
          onClick={showModal}
        >
          Read More
        </Button>
      </Card>
      <PdfModal
        IsPdfModalOpen={IsPdfModalOpen}
        handleCancel={handleCancel}
        pdfContent={pdfContent}
      />
    </>
  );
};

export default CardPdf;
