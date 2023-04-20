import React from 'react';
import './App.css';
import { CustomContextProvider } from './CustomContext';
import Jugalbandi from './Jugalbandi';

const App = () => (
  <CustomContextProvider>
    <Jugalbandi />
  </CustomContextProvider>
);

export default App;
