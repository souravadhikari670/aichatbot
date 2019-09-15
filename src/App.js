import React from 'react';

import './App.css';
import Header from './screens/Header'
import Router from './Router'
import Messanger from './Messanger'

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Messanger />
    </div>
  );
}

export default App;
