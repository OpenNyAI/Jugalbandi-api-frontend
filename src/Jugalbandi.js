import React, { useContext, useState } from 'react';
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
import { CustomContext } from './CustomContext';
import CardPdfList from './components/CardPdfList';
import Loader from './components/Loader';

const Jugalbandi = () => {
  const [uuid, setUuid] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { data, loading } = useContext(CustomContext);

  const onSetUuid = (number) => {
    setUuid(number);
    setDisabled(false);
    localStorage.removeItem('uuid');
    localStorage.setItem('uuid', number);
  };
  const onRefresh = () => {
    setUuid('');
    localStorage.removeItem('uuid');
    setDisabled(true);
  };
  return (
    <>
      <Header title="Jugalbandi" />

      <Row className="App-grid">
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
          <div className="App-leftGrid">
            {' '}
            <UuidInput
              uuid={uuid}
              onSetUuid={onSetUuid}
              onRefresh={onRefresh}
              disabled={disabled}
            />
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
            {loading ? (
              <Loader />
            ) : <CardPdfList cardPdfList={data} />}

          </div>
        </Col>
      </Row>
      <div className="App-Footer">
        <Footer footerText="Your Company Name123 Your Street Address, Your City, State, Zip, youremail@yourdomain.tld" />
      </div>

    </>
  );
};

export default Jugalbandi;
