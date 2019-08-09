import React, { Component } from 'react';
import axios from 'axios';

import restaurants from './data';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Restaurant from './components/Restaurant/Restaurant';
import GoogleMap from './components/GoogleMap/GoogleMap';

import { css } from '@emotion/core';
// First way to import
import { BounceLoader } from 'react-spinners';

const override = css`
    display: block;
    margin-top: 64px;
    margin-bottom: 64px;
    border-color: #607A52;
`;


const config = {
  headers: {'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`}
}

class App extends Component {
  state = {
    restaurants,
    data: null,
    spotlight: null,
    loading: true,
    lat: '',
    lng: ''
  }

  getRestaurant = () => {
    let i = Math.floor(Math.random() * this.state.restaurants.length);
    console.log(`Random Oakland spot chosen : ${this.state.restaurants[i]}`)
    return this.state.restaurants[i];
  }

  callYelp = restaurant => {
    this.setState({ loading: true })
    axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.getRestaurant()}&location=oakland`, config)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;
        this.setState({
          spotlight: data.businesses[0],
          lat: data.businesses[0].coordinates.latitude,
          lng: data.businesses[0].coordinates.longitude,
          loading: false
        })
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
        <div className="container">
          {
            this.state.loading
            ? <BounceLoader
            css={override}
            sizeUnit={"px"}
            size={64}
            color={'#316636'}
            loading={this.props.loading}
          />
          : <Restaurant
              spotlight={this.state.spotlight}
              callYelp={this.callYelp}  
            />
          }
          {
            this.state.lat &&
          <GoogleMap
            lat={this.state.lat}
            lng={this.state.lng}
          />
          }
         {/* <button onClick={this.callYelp}>Next spot</button> */}
        </div>
      </div>
    );
  }
}

export default App;
