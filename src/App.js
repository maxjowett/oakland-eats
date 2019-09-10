import React from 'react';
import './App.css';

import Side from './components/Side/Side.jsx';
import Main from './components/Main/Main.jsx';

function App() {
  return (
    <div className="App">
      <h1>Oakland Eats</h1>
      <Side />
      <Main />
    </div>
  );
}

export default App;
