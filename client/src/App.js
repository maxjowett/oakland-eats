import React, { Component } from 'react';
import axios from 'axios';


import restaurants from './data';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Restaurant from './components/Restaurant/Restaurant';

const config = {
  headers: {'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`}
}

class App extends Component {
  state = {
    restaurants,
    data: null,
    spotlight: null
  }

  getRestaurant = () => {
    let i = Math.floor(Math.random() * this.state.restaurants.length);
    console.log(`Random Oakland spot chosen : ${this.state.restaurants[i]}`)
    return this.state.restaurants[i];
  }

  callYelp = restaurant => {
    axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.getRestaurant()}&location=oakland`, config)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;
        this.setState({ spotlight: data })
      }
    });
  }


  componentDidMount() {
    this.callYelp()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Restaurant spotlight={this.state.spotlight} />
      </div>
    );
  }
}

export default App;
