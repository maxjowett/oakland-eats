import React, { Component } from 'react';
import './Restaurant.css';

class Restaurant extends Component {
  render() {
    console.log(this.props.spotlight)
    const { name, image_url, is_closed, url, location, categories, display_phone, price, rating, review_count } = this.props.spotlight
    return (
      <div className="spotlight">
        <div className="container">
          <h1 className="spotlight__name">{name}</h1>
          <h3>{location.address1}</h3>
          <h3>{location.city}, {location.zip_code}</h3>
          <div className="spotlight__details">
          <h3>{price}</h3>
          <h3>Rated {rating}/5 with {review_count} reviews on Yelp</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;