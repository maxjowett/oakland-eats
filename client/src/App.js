import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './components/Navbar/Navbar';

const config = {
  headers: {'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`}
}

class App extends Component {
  state = {
    data: null
  }


  callYelp = () => {
    axios.get('http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=oakland', config)
    .then((response) => console.log(response));
  }

  componentDidMount() {
    this.callYelp()
  }

  render() {
    console.log(process.env.REACT_APP_YELP_API_KEY)
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
