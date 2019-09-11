import React, { Component } from 'react';
import './Side.css';

class Side extends Component {
  state = {};
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => (
      <div className="restaurant">
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.display_phone}</h3>
        <h3>{restaurant.categories[0].title}</h3>
      </div>
    ));
  };
  render() {
    return (
      <div className="side">
        {this.props.restaurants && this.renderRestaurants()}
      </div>
    );
  }
}

export default Side;
