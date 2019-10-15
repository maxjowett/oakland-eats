import React, { Component } from 'react';
import './Side.css';
import Footer from './Footer/Footer.jsx';

class Side extends Component {
  state = {};
  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => (
      <div className="restaurant" key={restaurant.id}>
        <h2 className="restaurant__title">
          <a
            className="restaurant__a"
            href={restaurant.url}
            target="_blank"
            rel="noopener noreferrer">
            {restaurant.name}
          </a>
        </h2>
        <h3 className="restaurant__category">
          {restaurant.categories[0].title}
        </h3>
        <h3 className="restaurant__info">
          {restaurant.location.display_address[0]}
        </h3>
        <h3 className="restaurant__info">
          {restaurant.location.display_address[1]}
        </h3>
        <h3 className="restaurant__phone">{restaurant.display_phone}</h3>
      </div>
    ));
  };
  render() {
    return (
      <div className="side">
        {this.props.restaurants && this.renderRestaurants()}
        {this.props.restaurants && <Footer />}
      </div>
    );
  }
}

export default Side;
