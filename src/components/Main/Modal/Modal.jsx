import React from 'react';
import { Icon } from '../../../assets/Slice 1.png';

import { anotherIcon } from '../../../assets/fork-and-knife_1f374.png';
const Modal = props => {
  return (
    <React.Fragment>
      <div>
        <h1 className="modal__title">{props.isClicked.name}</h1>
        <p className="modal__category">
          {props.isClicked.categories[0].title}
        </p>
      </div>
      <div className="modal__info">
        <img src={anotherIcon} alt="Oaklandish" />
        <div className="modal__info-left">
          <h2 className="modal__contact">
            {props.isClicked.location.address1}
          </h2>
          <h2 className="modal__contact">
            {props.isClicked.location.city}, CA
          </h2>
          <h2 className="modal__contact">
            {props.isClicked.display_phone}
          </h2>
        </div>
        <div className="modal__info-right">
          <img
            className="modal__img"
            alt="Restaurant"
            src={props.isClicked.image_url}
          />
        </div>
      </div>
      <div>
        <h1 className="modal__rating">
          Rated {props.isClicked.rating} stars with{' '}
          {props.isClicked.review_count} reviews on{' '}
          <a href={props.isClicked.url}>Yelp</a>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Modal;
