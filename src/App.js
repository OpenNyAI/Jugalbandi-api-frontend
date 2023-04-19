import React, { useState } from 'react';
import './components/Header.css';
import Chatbot from 'react-chatbot-kit';
import {
  Col, Row,
} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import UuidInput from './components/UuidInput';
import config from './components/config';
import MessageParser from './components/MessageParser';
import ActionProvider from './components/ActionProvider';
import CardPdfList from './components/CardPdfList';
// import pdf from './components/ActionProvider';
// import Chatbot from './components/chatbot';

const App = () => {
  const [uuid, setUuid] = useState('');
  // const [response, setResponse] = useState('');

  const onSetUuid = (number) => {
    setUuid(number);
    // eslint-disable-next-line no-console
    console.log(uuid);
  };
  // const onSetResponse = (quetion) => {
  //   setResponse(quetion);
  //   // eslint-disable-next-line no-console
  //   console.log(query);
  // };
  return (
    <>
      <Header title="Jugalbandi" />

      <Row className="App-grid">
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
          <div className="App-leftGrid">
            {' '}
            <UuidInput onSetUuid={onSetUuid} />
            <Chatbot
              className="chatbot-container"
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              placeholderText="Type your question"
              headerText={<> </>}
              disableScrollToBottom={false}
            />
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
          <div className="App-rightGrid">
            <CardPdfList />
          </div>
        </Col>
      </Row>
      <div className="App-Footer">
        <Footer footerText="Your Company Name123 Your Street Address, Your City, State, Zip, youremail@yourdomain.tld" />
      </div>

    </>
  );
};

export default App;
