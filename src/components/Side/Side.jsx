import React, { Component } from 'react';
import './Side.css';

class Side extends Component {
  state = {};
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => (
      <div className="restaurant">
        <h2 className="restaurant__title">{restaurant.name}</h2>
        <h3>{restaurant.display_phone}</h3>
        <h3>{restaurant.categories[0].title}</h3>
        <h3>{restaurant.location.display_address[0]}</h3>
        <h3>{restaurant.location.display_address[1]}</h3>
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
