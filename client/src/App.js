import React, { Component } from 'react';
import axios from 'axios';


import restaurants from './data';
import './App.css';

import Navbar from './components/Navbar/Navbar';

const config = {
  headers: {'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`}
}

class App extends Component {
  state = {
    restaurants,
    data: null
  }

  getRestaurant = () => {
    let i = Math.floor(Math.random() * this.state.restaurants.length);
    console.log(`Random Oakland spot chosen : ${this.state.restaurants[i]}`)
    return this.state.restaurants[i];
  }

  callYelp = restaurant => {
    axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.getRestaurant()}&location=oakland`, config)
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
