import React, { useState } from 'react';
import './components/Header.css';
import Chatbot from 'react-chatbot-kit';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import UuidInput from './components/UuidInput';
import config from './components/config';
import MessageParser from './components/MessageParser';
import ActionProvider from './components/ActionProvider';
// import Chatbot from './components/chatbot';

const App = () => {
  const [uuid, setUuid] = useState('');
  // const [query, setQuery] = useState('');

  const onSetUuid = (number) => {
    setUuid(number);
    // eslint-disable-next-line no-console
    console.log(uuid);
  };

  // const onSetQuery = (quetion) => {
  //   setQuery(quetion);
  //   // eslint-disable-next-line no-console
  //   console.log(query);
  // };
  return (
    <>
      <Header title="Jugalbandi" />
      <div className="Uuid-div">
        <UuidInput onSetUuid={onSetUuid} />
      </div>
      <div className="App">
        <Chatbot
          className="chatbot-container"
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Type your question"
          headerText={<> </>}
        />
      </div>
      <div>
        <Footer footerText="Your Company Name123 Your Street Address, Your City, State, Zip, youremail@yourdomain.tld" />
      </div>

    </>
  );
};

export default App;
