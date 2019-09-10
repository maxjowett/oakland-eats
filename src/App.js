import React, { Component } from 'react';
import './App.css';
import restaurants from './data.js';
import Side from './components/Side/Side.jsx';
import Main from './components/Main/Main.jsx';

class App extends Component {
  state = {
    restaurants
  };
  render() {
    console.log(this.state.restaurants);
    return (
      <div className="App">
        <Side />
        <Main />
      </div>
    );
  }
}

export default App;
