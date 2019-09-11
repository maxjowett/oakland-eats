import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import restaurants from './data.js';
import Side from './components/Side/Side.jsx';
import Main from './components/Main/Main.jsx';

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
  }
};
class App extends Component {
  state = {
    restaurants
  };

  componentDidMount() {
    this.callYelp();
  }

  callYelp = () => {
    axios
      .get(
        `http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?t=fentons&location=oakland`,
        config
      )
      .then(response => {
        console.log(response);
      });
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
