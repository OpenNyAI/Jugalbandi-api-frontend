import { Button, Card } from 'antd';
import React from 'react';

const CardPdf = ({ content }) => (
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
    >
      Read More
    </Button>
  </Card>
);

export default CardPdf;
