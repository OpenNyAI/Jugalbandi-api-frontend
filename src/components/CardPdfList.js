import React from 'react';
import CardPdf from './CardPdf';

const CardPdfList = ({ cardPdfList }) => (
  <div style={{
    minHeight: '700px', maxHeight: '700px', overflowY: 'scroll', backgroundColor: 'rgba(209, 209, 251, 0.42)', padding: '5% 5% 0% 5%', borderRadius: '2%',
  }}
  >
    {cardPdfList !== null && cardPdfList.map(
      (cardPdfSourceText) => <CardPdf content={cardPdfSourceText?.substring(0, 506)} />,
    ) }
  </div>
);

export default CardPdfList;
