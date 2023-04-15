import React, { useState } from 'react';
import './components/Header.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import UuidInput from './components/UuidInput';

const App = () => {
  const [uuid, setUuid] = useState('');

  const onSetUuid = (number) => {
    setUuid(number);
    // eslint-disable-next-line no-console
    console.log(uuid);
  };
  return (
    <>
      <Header title="Jugalbandi" />
      <div className="Uuid-div">
        <UuidInput onSetUuid={onSetUuid} />
      </div>
      <div>
        <Footer footerText="Your Company Name123 Your Street Address, Your City, State, Zip, youremail@yourdomain.tld" />
      </div>

    </>
  );
};

export default App;
