import React from 'react';
import './components/Header.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Header title="Jugalbandi" />
    <div>content</div>
    <div className="App-footer">
      <Footer footerText="Your Company Name123 Your Street Address, Your City, State, Zip, youremail@yourdomain.tld" />
    </div>

  </>
);
export default App;
