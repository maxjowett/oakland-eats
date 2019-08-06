import React, { Component } from 'react';
import './Restaurant.css';

import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #316636;
`;

class Restaurant extends Component {

  state = {
    loading: true
  }
  render() {
    console.log(this.props.spotlight)
    const { name, image_url, is_closed, url, location, categories, display_phone, price, rating, review_count } = this.props.spotlight
    return (
      <div className="spotlight">
        <div className="container">
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={64}
          color={'#316636'}
          loading={this.state.loading}
        />
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